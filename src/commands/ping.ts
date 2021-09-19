import { Command, PieceContext } from "@sapphire/framework";
import type { Message } from "discord.js";

export default class pingCommand extends Command {
    constructor(context: PieceContext) {
        super(context, {
            aliases: ['latency'],
            description: 'Tests the latency of the bot.'
        })
    }

    async run(message: Message) {
        const response = await message.channel.send('Ping...');
        const latency = response.createdTimestamp - message.createdTimestamp;
        await response.edit(`Pong! Took me ${latency}ms.`);
    }
}