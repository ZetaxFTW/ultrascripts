import PocketBase from 'pocketbase';

const client = new PocketBase("https://pocketbase.paradoxical.vip");

export async function listScripts() {

    const scripts = await client.records.getFullList('scripts', 200 /* batch size */, {
        sort: '-created',
    });

    return JSON.stringify(scripts);

}

export async function createScript(name, creator, source) {
    const data = {
        name: name,
        creator: creator,
        source: source
    };

    const created = await client.records.create('scripts', data);

    return JSON.stringify(created);

}