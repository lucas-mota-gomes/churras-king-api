import { Request, Response } from 'express';
import { failureResponse, successResponse } from "../common/common.service";
// import { IAuthUser, ILoginUser } from './saidas.model';
import SaidasService from "./saidas.service";
// import env from '../../../environment';

class SaidasController {

    saidas_service: SaidasService = new SaidasService();

    getSaida(req: Request, res: Response){
        this.saidas_service.getSaida().then((result:any)=>{
            successResponse('Success', result, res);
        }).catch(error=>{
            failureResponse('Failure to get saida' + error, error, res);
        })
    }

    createSaida(req: Request, res: Response){
        this.saidas_service.createSaida(req.body).then((result:any)=>{
            successResponse('saida create successful', result, res);
        }).catch((error: string)=>{
            failureResponse('Failure to create saida' + error, error, res);
        })
    }

}

export default SaidasController;