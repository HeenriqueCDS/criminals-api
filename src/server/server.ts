import Fastify from "fastify";
import { database } from "../database/db";
const fastify = Fastify({
  logger: true,
});

fastify.get("/criminals", async function handler(request, reply) {
  const criminals = await database.criminal.findMany();
  reply.send(criminals);
});

try {
  fastify.listen({ port: 3000 }, () => {
    console.log(`Server listening on port ${3000}`);
  });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
