import { environment } from 'src/environments/environment';

export class AppSettings {
    constructor() {}

    static BASE = environment.origin;
    static login = `${environment.praxio}/Authorization/RequestToken`
}