import { Listener } from "@sapphire/framework";

export default class readyListener extends Listener {
    constructor(context: any) {
        super(context, {
            once: true,
            event: 'ready'
        })
    }

    run(client: any) {
        const { tag, id } = client.user;
        console.info(`Successfully logged in as ${tag} (${id})`);
    }
}