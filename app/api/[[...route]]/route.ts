import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

import type { PageConfig } from "next";
import { error } from "console";

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const app = new Hono().basePath("/api");

app.get("/hello", clerkMiddleware(), (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({ error: "Not authenticated" });
  }

  return c.json({
    message: `Hello ${auth.userId}`,
    userId: auth.userId,
  });
});

export const GET = handle(app);
export const POST = handle(app);
