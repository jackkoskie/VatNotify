# VatNotify
A Discord bot that sends a message when certain controllers come online.

## Setup
1. Download the latest release from [releases](https://github.com/GoldenXLence/VatNotify/releases)
1. Rename `.env-example` to `.env`
1. Follow the instructions [here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token#creating-a-bot) to get your bots token though **DO NOT** add the bot to your server yet
1. Add your token to the `.env` file and fill in the other variables
1. Get your client id by going to OAuth2 on the developer website. It should be at the top.
1. Goto the following link though change `<client id>` with the client id you found: `https://discord.com/api/oauth2/authorize?client_id=<client id>&permissions=2147560512&scope=bot%20applications.commands`
1. Choose a server, hit continue, then authorise.
1. Start the bot with `node .` and your done! (Note: unless you are running this on a server, the bot will stop when you turn off your computer)
