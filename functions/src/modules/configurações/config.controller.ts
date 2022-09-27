import { Request, Response } from 'express';
import { failureResponse, successResponse } from "../common/common.service";
// import { IAuthUser, ILoginUser } from './config.model';
import ConfigService from "./config.service";
// import env from '../../../environment';

class ConfigController {

    config_service: ConfigService = new ConfigService();

    getProduto(req: Request, res: Response){
        this.config_service.getProdutos().then((result:any)=>{
            successResponse('Success', result, res);
        }).catch(error=>{
            failureResponse('Failure to get config' + error, error, res);
        })
    }

    createProduto(req: Request, res: Response){
        this.config_service.createProdutos(req.body).then((result:any)=>{
            successResponse('config create successful', result, res);
        }).catch((error: string)=>{
            failureResponse('Failure to create config' + error, error, res);
        })
    }

}

export default ConfigController;