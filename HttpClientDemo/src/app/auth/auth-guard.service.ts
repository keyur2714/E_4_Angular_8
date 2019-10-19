import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    

    constructor(private router : Router,private authService : AuthService){}

    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if(this.authService.isLoggedIn){
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }

    canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        //alert(state.url);
        let user : User  = JSON.parse(sessionStorage.getItem('currentUser'))
        //alert(sessionStorage.getItem('currentUser'));
        if(state.url === '/home/courseMaterial'){
            if(user.userRole === 'ADMIN'){                
                return true;
            }else{
                alert("Sorry but you don't have permission to view this page.");
                return false;
            }
        }else{
            return true;
        }            
    }

}