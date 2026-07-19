import type { Request, Response } from "express";
import { service } from "./service";
import Handlebars from "handlebars";
import { chromium } from "playwright";
import path from "node:path";

export const controller = {
  async profile(req: Request & { user: any }, res: Response) {
    try {
      const result = await service.read(req.user.id);
      if (!result) {
        return res.status(404).json({ errors: "Profile not found" });
      }
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },

  async resume(req: Request & { user: any }, res: Response) {
    const filePath = path.resolve(import.meta.dir, "templates", "template1.hbs");
    const template = await Bun.file(filePath).text();
    const compile = Handlebars.compile(template);
    const html = compile(req.body);

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setContent(html, {
      waitUntil: "networkidle",
    });
    let pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    });
    await browser.close();

    const base64 = Buffer.from(pdf).toString("base64");

    res.json({ pdf: `data:application/pdf;base64,${base64}` });
  },
};
