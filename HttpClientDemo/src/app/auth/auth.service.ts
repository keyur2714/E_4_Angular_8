import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

    appUrl : string = 'http://localhost:3000/user_details';
    isLoggedIn : boolean = false;

    constructor(private httpClient : HttpClient){}

    authenticate(userName : string,password : string) : Observable<User> {
        return this.httpClient.get<User[]>(this.appUrl).pipe(
            map(users =>{
                for(let user of users){
                    if(user.userName === userName && user.password === password){                        
                        return user;
                    }
                }                
            })
        )
        
    }
}