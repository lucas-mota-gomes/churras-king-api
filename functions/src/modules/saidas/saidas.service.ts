// import { IAuthUser } from "./session.model";
import env from '../../../environment';
import { ISaida } from './saidas.model';

export default class SessionService {

    public async getSaida(): Promise<any>{
        const records = await env.client.records.getFullList('saida', 200 /* batch size */, {
            sort: '-created'
        });
        return records;
    }

    public async createSaida(saida: ISaida): Promise<any>{
        const record = await env.client.records.create('saida', saida);
        return record;
    }
}