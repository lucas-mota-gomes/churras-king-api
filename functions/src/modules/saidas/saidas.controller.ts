import { Request, Response } from 'express';
import { failureResponse, successResponse } from "../common/common.service";
// import { IAuthUser, ILoginUser } from './session.model';
import SessionService from "./saidas.service";
// import env from '../../../environment';

class SessionController {

    session_service: SessionService = new SessionService();

    getSaida(req: Request, res: Response){
        this.session_service.getSaida().then((result:any)=>{
            successResponse('Success', result, res);
        }).catch(error=>{
            failureResponse('Failure to get user' + error, error, res);
        })
    }

    createSaida(req: Request, res: Response){
        this.session_service.createSaida(req.body).then((result:any)=>{
            successResponse('user create successful', result, res);
        }).catch((error: string)=>{
            failureResponse('Failure to create authUser' + error, error, res);
        })
    }

}

export default SessionController;