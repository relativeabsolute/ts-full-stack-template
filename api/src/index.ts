import { container, TYPES, Application } from './di';

let app = container.get<Application>(TYPES.Application);
app.listen();
