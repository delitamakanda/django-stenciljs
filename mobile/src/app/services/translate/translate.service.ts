import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../../environments/environment';

@Injectable()
export class TranslateService {
    data: any = {}

    constructor(private http: HttpClient) {}

    use(lang: string): Promise<{}> {
        return new Promise<{}>((resolve, reject) => {
            const langPath = `${environment.staticAssetsUrl}i18n/${lang || 'en'}.json`;

            this.http.get<{}>(langPath).subscribe(
                translation => {
                    this.data = Object.assign({}, translation || {});
                    resolve(this.data);
                },
                error => {
                    this.data = {};
                    resolve(this.data);
                }
            );
        });
    }
}
