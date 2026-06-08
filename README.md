# Slack Channel Bot

A powerful, always-on Slack bot that responds to slash commands and integrates with your Slack workspace. Built with Node.js and the Slack Bolt framework.

## Features

- ✨ **Slash Commands** - Respond to custom Slack commands
- 🤖 **Real-time Integration** - Socket Mode for instant responses
- ⏰ **24/7 Uptime** - Deployed on Nest infrastructure
- 🚀 **Always Online** - Never misses a command
- 🔧 **Easy Customization** - Extensible command structure

## Available Commands

### `/hat-ping`
Responds with "Pong!" and displays the command latency.

**Usage:**
```
/hat-ping
```

**Response:**
```
@channel Pong!
Latency: 45ms
```

### `/hat-joke`
Fetches and shares a random joke from an API.

**Usage:**
```
/hat-joke
```

**Response:**
```
Why did the scarecrow win an award?

Because he was outstanding in his field!
```

### `/hat-flip`
Flips a coin and returns the result (Heads or Tails).

**Usage:**
```
/hat-flip
```

**Response:**
```
Coin Flip Result: Heads 🪙
```

## Prerequisites

- Node.js 18+ or higher
- npm or yarn
- A Slack workspace where you have admin permissions
- Slack app credentials

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/HammaadKhawja/Slack-Channel-Bot.git
cd Slack-Channel-Bot
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory:

```bash
touch .env
```

Add your Slack app tokens:
```
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_APP_TOKEN=xapp-your-app-token
```

**Where to find these tokens:**
1. Go to [Slack API Dashboard](https://api.slack.com/apps)
2. Select your app
3. Under "OAuth & Permissions" → find `SLACK_BOT_TOKEN`
4. Under "Socket Mode" → find `SLACK_APP_TOKEN`

## Usage

### Local Development

Run the bot locally:
```bash
node index.js
```

You should see:
```
bot is running!
```

Test a slash command in your Slack workspace:
```
/hat-ping
```

Stop the bot with `Ctrl+C`.

## Deployment

### Deploy to Nest (24/7 Hosting)

1. **SSH into Nest:**
   ```bash
   ssh your-username@hackclub.app
   ```

2. **Clone your repository:**
   ```bash
   git clone https://github.com/HammaadKhawja/Slack-Channel-Bot.git
   cd Slack-Channel-Bot
   npm install
   ```

3. **Create `.env` file:**
   ```bash
   nano .env
   ```
   Paste your Slack tokens and save.

4. **Test it works:**
   ```bash
   node index.js
   ```
   Try a slash command in Slack, then press `Ctrl+C`.

5. **Set up systemd service:**
   ```bash
   sudo nano /etc/systemd/system/slackbot.service
   ```

   Paste this configuration:
   ```ini
   [Unit]
   Description=Slack Bot
   After=network-online.target
   Wants=network-online.target

   [Service]
   Type=simple
   Restart=always
   WorkingDirectory=/root/Slack-Channel-Bot
   ExecStart=/usr/bin/node index.js
   TimeoutStartSec=0

   [Install]
   WantedBy=multi-user.target
   ```

   Save with `Ctrl+O`, then `Enter`, then `Ctrl+X`.

6. **Start the service:**
   ```bash
   systemctl daemon-reload
   systemctl enable --now slackbot.service
   ```

Your bot is now running 24/7! 🚀

### Verify Service Status

```bash
systemctl status slackbot.service
```

### Restart the Bot

```bash
systemctl restart slackbot.service
```

## Adding New Commands

Edit `index.js` to add new slash commands. Example:

```javascript
app.command("/hat-hello", async ({ command, ack, respond }) => {
  await ack();
  await respond({ 
    text: `Hello! Your command was: ${command.text}`,
    response_type: "in_channel"
  });
});
```

## Troubleshooting

### Bot isn't responding
- Verify `.env` has correct tokens
- Check bot status: `systemctl status slackbot.service`
- View logs: `systemctl logs slackbot.service`

### Permission denied errors
- Make sure your Slack app has permission to read/write messages
- Check OAuth scopes in Slack API dashboard

### Port already in use
- If running multiple services, verify each uses a different port

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Slack Bolt
- **HTTP Client:** Axios
- **Environment:** Dotenv
- **Hosting:** Nest

## License

MIT

## Contributing

Feel free to fork, modify, and improve this bot!

## Support

For issues or questions, please check the [Slack Bolt Documentation](https://slack.dev/bolt-js/) or open an issue on GitHub.
