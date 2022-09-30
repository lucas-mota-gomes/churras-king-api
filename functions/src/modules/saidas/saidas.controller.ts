import { Request, Response } from 'express';
import { failureResponse, successResponse } from "../common/common.service";
// import { IAuthUser, ILoginUser } from './saidas.model';
import SaidasService from "./saidas.service";
// import env from '../../../environment';

class SaidasController {

    saidas_service: SaidasService = new SaidasService();

    getSaida(req: Request, res: Response) {
        this.saidas_service.getSaida().then((result: any) => {
            successResponse('Success', result, res);
        }).catch(error => {
            failureResponse('Failure to get saida' + error, error, res);
        })
    }

    createSaida(req: Request, res: Response) {
        this.saidas_service.createSaida(req.body).then((result: any) => {
            successResponse('saida create successful', result, res);
        }).catch((error: string) => {
            failureResponse('Failure to create saida' + error, error, res);
        })
    }

    getData(req: Request, res: Response) {
        this.saidas_service.getData(req.params.collection).then((result: any) => {
            successResponse('Success', result, res);
        }).catch(error => {
            failureResponse('Failure to get data' + error, error, res);
        })
    }

    createData(req: Request, res: Response) {
        this.saidas_service.createData(req.params.collection, req.body).then((result: any) => {
            successResponse('data create successful', result, res);
        }).catch((error: string) => {
            failureResponse('Failure to create data' + error, error, res);
        })
    }

    deleteData(req: Request, res: Response) {
        this.saidas_service.deleteData(req.params.collection, req.params.id).then((result: any) => {
            successResponse('data delete successful', result, res);
        }).catch((error: string) => {
            failureResponse('Failure to delete data' + error, error, res);
        })
    }

}

export default SaidasController;