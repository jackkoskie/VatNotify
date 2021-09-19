import { get } from 'http';
const getJSON = (url: string, callback: Function) => {
    get(url, (res) => {
        let body: string;

        res.on('data', (chunk) => {
            body += chunk;
        });

        res.on('end', () => {
            try {
                let json = JSON.parse(body.substring(9));
                callback(json);
            } catch (error) {
                console.error(error)
            }
        })
    })
}

export { getJSON };