import 'reflect-metadata';
import { Container } from 'inversify';
import { IConfig } from '../interfaces/config';
import { TYPES } from './types';
import { Application } from './application';
import { DefaultController, ROUTE_TYPES } from '../routes';

export let container = new Container();

require('dotenv').config();

function buildConfig(): IConfig {
    return {
        port: +process.env.PORT,
    };
}

container.bind<IConfig>(TYPES.Config).toConstantValue(buildConfig());
container.bind<Application>(TYPES.Application).to(Application).inSingletonScope();
container.bind<DefaultController>(ROUTE_TYPES.Default).to(DefaultController).inSingletonScope();
