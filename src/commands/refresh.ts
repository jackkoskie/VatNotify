import { Command, PieceContext } from "@sapphire/framework";
import type { Message } from "discord.js";
import { refreshControllers } from "../utils/chron";

if (!process.env.CHANNEL) throw new Error('Channel is Undefined! Please set a channel to post messages in')

export default class refreshCommand extends Command {
    constructor(context: PieceContext) {
        super(context, {
            aliases: [],
            description: 'Refreshs data from vatsim servers.'
        })
    }

    async run(message: Message) {
        if (!process.env.CONNECTED && process.env.CONNECTED != '') return;
        refreshControllers(process.env.CONNECTED.split(','));
    }
}