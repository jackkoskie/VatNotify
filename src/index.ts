import { SapphireClient } from "@sapphire/framework";
import { config } from "dotenv";
import { registerChron } from "./utils/chron";
config();

const client = new SapphireClient({ intents: 13825, defaultPrefix: '!' });
registerChron();

const year = new Date().getFullYear();
export { client, year };

client.login(process.env.TOKEN)