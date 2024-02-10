import fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import { pollResults } from "./ws/poll-results";

const app = fastify();

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);
app.register(cookie, {
  secret: "polls-app",
  hook: "onRequest",
});
app.register(websocket);
app.register(pollResults);

app.listen({ port: 4000 }).then(() => {
  console.log("HTTP server runing!");
});
