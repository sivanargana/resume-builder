# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or `pnpm run <script>`
- Use `bunx <package> <command>` instead of `npx <package> <command>`
- Bun automatically loads .env, so don't use dotenv.

## APIs

- `Bun.serve()` supports WebSockets, HTTPS, and routes. Don't use `express`.
- `bun:sqlite` for SQLite. Don't use `better-sqlite3`.
- `Bun.redis` for Redis. Don't use `ioredis`.
- `Bun.sql` for Postgres. Don't use `pg` or `postgres.js`.
- `WebSocket` is built-in. Don't use `ws`.
- Prefer `Bun.file` over `node:fs`'s readFile/writeFile
- Bun.$`ls` instead of execa.

## Testing

Use `bun test` to run tests.

```ts#index.test.ts
import { test, expect } from "bun:test";

test("hello world", () => {
  expect(1).toBe(1);
});
```

## Frontend

Use HTML imports with `Bun.serve()`. Don't use `vite`. HTML imports fully support React, CSS, Tailwind.

Server:

```ts#index.ts
import index from "./index.html"

Bun.serve({
  routes: {
    "/": index,
    "/api/users/:id": {
      GET: (req) => {
        return new Response(JSON.stringify({ id: req.params.id }));
      },
    },
  },
  // optional websocket support
  websocket: {
    open: (ws) => {
      ws.send("Hello, world!");
    },
    message: (ws, message) => {
      ws.send(message);
    },
    close: (ws) => {
      // handle close
    }
  },
  development: {
    hmr: true,
    console: true,
  }
})
```

HTML files can import .tsx, .jsx or .js files directly and Bun's bundler will transpile & bundle automatically. `<link>` tags can point to stylesheets and Bun's CSS bundler will bundle.

```html#index.html
<html>
  <body>
    <h1>Hello, world!</h1>
    <script type="module" src="./frontend.tsx"></script>
  </body>
</html>
```

With the following `frontend.tsx`:

```tsx#frontend.tsx
import React from "react";
import { createRoot } from "react-dom/client";

// import .css files directly and it works
import './index.css';

const root = createRoot(document.body);

export default function Frontend() {
  return <h1>Hello, world!</h1>;
}

root.render(<Frontend />);
```

Then, run index.ts

```sh
bun --hot ./index.ts
```

For more information, read the Bun API docs in `node_modules/bun-types/docs/**.mdx`.

## Project: resume-builder

A Bun monorepo containing an Express + Prisma + SQLite API server. The root `index.ts` is a stub; all real code lives in `packages/server/`.

### Layout

- `packages/server/` — the only real package. Express 5 API, Prisma 7, SQLite via libSQL adapter.
- `packages/server/prisma/schema.prisma` — Prisma schema. Custom client output at `../generated/prisma` (so generated client is checked in / used directly, not the default `@prisma/client`).
- `packages/server/prisma/migrations/` — SQLite migrations (current `20260623122259_init`).
- `packages/server/features/<feature>/` — feature folders. Each contains `routes.ts`, `controller.ts`, `service.ts` (MVC). Only `users/` exists today.
- `packages/server/client.ts` — exports the singleton `prisma` instance (PrismaClient with libSQL adapter; reads `DATABASE_URL`).
- `packages/server/swagger.ts` — hand-written OpenAPI 3.0 spec used by `swagger-ui-express` (served at `/docs`). Paths are inlined as JS, not annotated via JSDoc.
- `packages/server/seed.ts` — seeds 8 users with profiles, skills, education, experience.

### Domain model

`User` 1:1 `Profile`; `Profile` 1:N `Skill` / `Education` / `Experience`. SQLite (file:./dev.db). cuid IDs.

### Common commands

All commands run from `packages/server/`:

```bash
# install (run from repo root — Bun workspace)
bun install

# dev server (watch mode)
bun run dev          # → bun --watch run index.ts

# one-shot start
bun run start        # → bun run index.ts

# Prisma
bun run generate     # → bunx --bun prisma generate  (regenerate client into ./generated/prisma)
bun run migrate      # → bunx --bun prisma migrate dev
bun run studio       # → bunx --bun prisma studio

# seed the DB
bun run seed.ts      # or: bun run seed

# tests
bun test
```

Server runs on `PORT` (default 3000). Swagger UI at `http://localhost:3000/docs`. SQLite file at `packages/server/dev.db`.

### Environment

- `DATABASE_URL` — must be set, e.g. `file:./dev.db`. Lives in `packages/server/.env` (Bun loads it automatically, but `client.ts` and `prisma.config.ts` also import `dotenv/config` as a belt-and-suspenders measure for Prisma CLI).
- `PORT` — optional, default 3000.

### Conventions & gotchas

- **Prisma client is custom-output.** The generated client lives at `packages/server/generated/prisma/client.ts`. Import via `import { PrismaClient } from "./generated/prisma/client"` (or `../../generated/prisma/client` from inside `features/`). Don't `@prisma/client`.
- **Adapter is libSQL.** `client.ts` uses `PrismaLibSql` even though the schema datasource says `sqlite` — keep both in sync if switching providers.
- **MVC per feature.** New endpoint → create `features/<name>/{routes,controller,service}.ts`, mount the router in `index.ts`. Keep `controller.ts` thin (HTTP shape), `service.ts` does Prisma work, `routes.ts` wires method → controller.
- **Express 5 is in use.** Async errors propagate to the error middleware automatically — don't reach for an async wrapper.
- **Swagger is manual.** Update `swagger.ts` when adding routes; `apis: []` means JSDoc scanning is off.
- **Don't use `dotenv`.** Bun loads `.env` automatically. The existing `dotenv/config` imports are only there because Prisma's CLI doesn't go through Bun's loader — leave them.
