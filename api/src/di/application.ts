import { inject, injectable } from 'inversify';
import express from 'express';
import { Express } from 'express';
import { TYPES } from './types';
import { IConfig } from '../interfaces/config';
import { DefaultController, ROUTE_TYPES } from '../routes';

@injectable()
export class Application {
    private expressApp: Express;
    private port: number;

    constructor(@inject(TYPES.Config) private config: IConfig, @inject(ROUTE_TYPES.Default) private defaultController: DefaultController) {
        this.expressApp = express();
        this.expressApp.use(express.static('./dist/public'));

        this.port = this.config.port ?? 8080;

        this.defaultController.register(this.expressApp);
    }

    public listen(): void {
        this.expressApp.listen(this.port, () => {
            console.log(`Server started at http://localhost:${this.port}`);
        });
    }
}
