import { injectable } from 'inversify';
import express from 'express';

@injectable()
export class DefaultController {
    constructor() {}

    register(app: express.Application): void {
        app.get('/', (req, res) => {
            res.send('Hello!');
        });
    }
}
