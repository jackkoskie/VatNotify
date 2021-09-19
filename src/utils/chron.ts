import { schedule } from 'node-cron';
import { client, year } from "..";
import { getJSON } from "../utils/getJSON";
import { container } from '@sapphire/framework'

process.env.CONNECTED = ''


const refreshControllers = (connected: any[]) => {
    getJSON('http://data.vatsim.net/v3/vatsim-data.json', (json: any) => {
        const { controllers } = json;

        let fetchedConnected: any[] = [];

        let airportsList = process.env.AIRPORTS;
        if (!airportsList) return;
        let airports = airportsList.split(' ');

        airports.forEach(airport => {
            const filteredControllers = controllers.filter((c: { callsign: string; }) => c.callsign.startsWith(airport));
            if (!filteredControllers) return;
            fetchedConnected.push(...filteredControllers);
        });

        if (!process.env.CHANNEL) throw new Error('Channel is Undefined! Please set a channel to post messages in.')
        let channel: any = client.channels.cache.get(process.env.CHANNEL);

        fetchedConnected.forEach(controller => {
            if (!connected.includes(controller.cid)) {
                const controllerEmbed = {
                    title: `${controller.name} (${controller.cid}) - ${controller.callsign} (${controller.frequency})`,
                    description: `${controller.text_atis ? controller.text_atis.join('\n') : ''}`,
                    timestamp: Date.parse(controller.logon_time),
                    footer: {
                        text: `Powered by VatNotify © ${year}`,
                    }
                }

                try {
                    channel?.send({ embeds: [controllerEmbed] })
                } catch (error) {
                    throw new Error('Channel is Undefined or not valid! Please set a channel to post messages in.')
                }
                connected.push(controller.cid);
            }
        });

        let cidFetchedConnected: any[] = [];
        fetchedConnected.forEach(controller => {
            cidFetchedConnected.push(controller.cid);
        })

        let newConnected: any[] = [];
        for (let i = 0; i < connected.length; i++) {
            if (!fetchedConnected.includes(connected[i])) {
                newConnected.push(connected.splice(i, 1))
            }
        }

        return newConnected;
    })
}


const registerChron = () => {
    schedule(`*/${process.env.REFRESH || '5'} * * * *`, async () => {
        if (!process.env.CONNECTED) return;
        refreshControllers(process.env.CONNECTED.split(','));
    })
}

export { registerChron, refreshControllers }