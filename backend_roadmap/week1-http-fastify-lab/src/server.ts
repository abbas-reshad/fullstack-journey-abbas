import Fastify from "fastify";
import { uptime } from "node:process";
// health route
const app = Fastify({
  logger: true,
});
("");
app.get("/health", async () => {
  return {
    status: "ok",
    uptime: process.uptime(),
  };
});
//ping route
app.get("/ping", async () => {
  return { message: "pong" };
});

//echo route
app.get("/echo", async (request) => {
  const msg = (request.query as any).msg;

  return { msg };
});

// start the server
// start server
const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("Server running on http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
