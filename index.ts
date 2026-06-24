import concurrently from "concurrently";

concurrently([
  {
    name: "server",
    command: "bun run dev",
    cwd: "packages/server",
    prefixColor: "pink",
  },
  {
    name: "client",
    command: "bun run dev",
    cwd: "packages/client",
    prefixColor: "blue",
  },
]);
