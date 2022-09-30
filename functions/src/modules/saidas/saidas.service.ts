// import { IAuthUser } from "./session.model";
import env from '../../../environment';
import { ISaida } from './saidas.model';

export default class SessionService {

    public async getSaida(): Promise<any> {
        const records = await env.client.records.getFullList('saida', 200 /* batch size */, {
            sort: '-created'
        });
        return records;
    }

    public async createSaida(saida: ISaida): Promise<any> {
        const record = await env.client.records.create('saida', saida);
        return record;
    }

    public async createData(collection: string, body: any): Promise<any> {
        const record = await env.client.records.create(collection, body);
        return record;
    }

    public async getData(collection: string): Promise<any> {
        const records = await env.client.records.getFullList(collection, 200 /* batch size */, {
            sort: '-created'
        });
        return records;
    }

    public async deleteData(collection: string, id: any): Promise<any> {
        const record = await env.client.records.delete(collection, id);
        return record;
    }
}