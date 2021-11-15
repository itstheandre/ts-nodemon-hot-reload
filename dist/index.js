"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify = (0, fastify_1.default)({ logger: true });
fastify.get("/", async () => {
    return {
        hello: "world",
    };
});
const PORT = process.env.PORT || 8080;
async function start() {
    try {
        await fastify.listen(PORT, "0.0.0.0");
    }
    catch (error) {
        fastify.log.error(error);
    }
}
start();
