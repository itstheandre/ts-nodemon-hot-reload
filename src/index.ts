import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get("/", async () => {
  return {
    hello: "banana",
  };
});

const PORT = process.env.PORT || 8080;

async function start() {
  try {
    await fastify.listen(PORT, "0.0.0.0");
  } catch (error) {
    fastify.log.error(error);
  }
}

start();
