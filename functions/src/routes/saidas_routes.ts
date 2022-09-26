import { Application, Request, Response } from 'express';
import * as cors from 'cors';
import SaidasController from '../modules/saidas/saidas.controller';
import authMiddleware from '../modules/middleware/auth.middleware';

export class SaidasRoutes {

    saidas_controller: SaidasController = new SaidasController();

    public route(app: Application) {

        app.options('/saida', cors);
        app.post('/saida', cors(), (req: Request, res: Response) => {
            this.saidas_controller.createSaida(req, res);
        });

        app.get('/saida', cors(), authMiddleware, (req: Request, res: Response) => {
            this.saidas_controller.getSaida(req, res);
        });

    }
}