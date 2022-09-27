import { Application, Request, Response } from 'express';
import * as cors from 'cors';
// import authMiddleware from '../modules/middleware/auth.middleware';
import ConfigController from '../modules/configurações/config.controller';

export class ConfigRoutes {

    config_controller: ConfigController = new ConfigController();

    public route(app: Application) {

        app.options('/config', cors);
        app.post('/config/produto', cors(), (req: Request, res: Response) => {
            this.config_controller.createProduto(req, res);
        });

        app.get('/config/produto', cors(), (req: Request, res: Response) => {
            this.config_controller.getProduto(req, res);
        });

    }
}