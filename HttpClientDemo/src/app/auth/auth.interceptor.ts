import { HttpInterceptor,HttpRequest,HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        console.log("From Inteceptor...");
        let user : User = JSON.parse(sessionStorage.getItem("currentUser"));
        if(user !== null && user !== undefined){
            let token = user.token;
            if(token != null && token !== undefined){
                req = req.clone(
                    {
                        setHeaders : {'Authorization':`Bearer `+token}
                    }
                );
            }
        }        
        return next.handle(req);
    }
}