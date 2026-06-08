require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/hat-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `<!channel> Pong!\nLatency: ${latency}ms`, response_type: "in_channel" });
});

app.command("/hat-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text: `${response.data.setup}\n\n${response.data.punchline}`,
      response_type: "in_channel"
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke.", response_type: "in_channel" });
  }
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
