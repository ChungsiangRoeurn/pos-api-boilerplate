import express from "express";
import type { Express, Response, Request } from "express";
import rootRouter from "./routes/index.ts";
import { PrismaClient } from "@prisma/client";
import path from "path";
import { PORT } from "./secrets.ts";
import authRoute from "./auth/authRoute.ts";

const app: Express = express();

app.use(express.json());

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

app.use("/api/auth", authRoute);
app.use("/api", rootRouter);

export const prismaClient = new PrismaClient({
  log: ["query"],
});

// app.use(errorMiddleware);

// Start server
app.listen(PORT, () =>
  console.log(`🚀 Server is running at http://localhost:${PORT}`),
);
