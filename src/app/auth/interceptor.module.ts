import { Injectable, NgModule } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        console.log(req)
        const headers = new HttpHeaders({
            'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFsZXNzYW5kcm8iLCJJZFVzdWFyaW8iOiIzIiwiVXN1YXJpbyI6InRydWUiLCJuYmYiOjE1NjA2MTM3MjUsImV4cCI6MTU2MDYzMTcyNSwiaWF0IjoxNTYwNjEzNzI1LCJpc3MiOiJQcmF4aW9Qcm9jZXNzb1NlbGV0aXZvRnJvbnRJc3N1ZXIiLCJhdWQiOiJQcmF4aW9Qcm9jZXNzb1NlbGV0aXZvRnJvbnRBdWRpZW5jZSJ9.De7YyE0kWLt-NF8N606lRcruisReoEXKmrDTNOfdP2uHM-2yVUNpuCcmfCZSLLMY8nNFVaQmnAgp69tcmK2VOwbFG_1_p2iyz6nKQs5dGDGM2KjRHLeqJILvG0yRoC_5uChM2T9XxbBS5P0ACeRvoUw0wBlc_-ScPuyR6dJ25NDLc7ZgxLd9rMShXP4AYzxB_g9Qr4KhrGjju63Vr-T8JoErcUkS7ZKX_XXjiQ8bvIiqAmwXRRxP8TBKFxYk5fMNAViuK__2h09CaBoHmNqiKSJAFOghUvLORJ2L-FADHmE8vPMlHQ5z7rQf6n_z-g823UrsQz7iYjdk81J12YlWOQ`
        });

        const newReq = req.clone({headers})
        return next.handle(newReq);
    }
}


@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ],
})
export class Interceptor{ }