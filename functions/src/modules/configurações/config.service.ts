// import { IAuthUser } from "./session.model";
import env from '../../../environment';
import { IProduto } from './config.model';

export default class SessionService {

    public async getProdutos(): Promise<any>{
        const records = await env.client.records.getFullList('produtos', 200 /* batch size */, {
            sort: '-created'
        });
        return records;
    }

    public async createProdutos(produto: IProduto): Promise<any>{
        const record = await env.client.records.create('produtos', produto);
        return record;
    }
}