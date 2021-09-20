<div align="center">
  
# VatNotify
A Discord bot that sends a message when certain VATSIM controllers come online.
  
![David](https://img.shields.io/david/GoldenXLence/VatNotify) ![GitHub](https://img.shields.io/github/license/goldenxlence/vatnotify) ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/GoldenXLence/VatNotify?label=version) ![node-current](https://img.shields.io/node/v/discord.js) ![GitHub last commit](https://img.shields.io/github/last-commit/goldenxlence/vatnotify)
  
[//]: # "Node badge above uses discord.js's node requirement as this is not a published node package and d.js is very heavily required."
  
</div>

## Setup
1. Download the latest release from [releases](https://github.com/GoldenXLence/VatNotify/releases)
1. Rename `.env-example` to `.env`
1. Follow the instructions [here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token#creating-a-bot) to get your bots token though **DO NOT** add the bot to your server yet
1. Add your token to the `.env` file and fill in the other variables
1. Get your client id by going to OAuth2 on the developer website. It should be at the top.
1. Goto the following link though change `<client id>` with the client id you found: `https://discord.com/api/oauth2/authorize?client_id=<client id>&permissions=2147560512&scope=bot%20applications.commands`
1. Choose a server, hit continue, then authorise.
1. Start the bot with `node .` and your done! (Note: unless you are running this on a server, the bot will stop when you turn off your computer)
