import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

// Create the main Hono app
const app = new Hono();

app.post("/api/v1/signup", (c) => {
  return c.text("signup route");
});

app.post("/api/v1/signin", (c) => {
  return c.text("signin route");
});

app.post("/api/v1/blog", (c) => {
  return c.text("signin route");
});

app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("get blog route");
});

app.put("/api/v1/blog", (c) => {
  return c.text("signin route");
});

export default app;

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL, // Use process.env to access environment variables
}).$extends(withAccelerate());
