import { Router } from "express";
import { auth } from "./auth.ts";
import { toNodeHandler } from "better-auth/node";

const router = Router();

router.all("*", async (req, res) => {
  return toNodeHandler(auth)(req, res);
});

export default router;
