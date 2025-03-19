import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

var count = 0;

app.get("/", (c) => {
  return c.html("<h1>Hello Hono!</h1>");
});

app.get("/count", (c) => {
  return c.text(`Count: ${count}\n`);
});

app.post("/count", (c) => {
  count++;
  return c.text(`Count: ${count}\n`);
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
