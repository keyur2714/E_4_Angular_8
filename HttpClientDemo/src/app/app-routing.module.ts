import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'login' , component : LoginComponent},
  { path: 'home', loadChildren: () => import('./course/course.module').then(a => a.CourseModule), canActivate : [AuthGuard],canActivateChild: [AuthGuard] },  
  {path : 'logout' , component : LogoutComponent},  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes
    ,{preloadingStrategy:PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("App Routing Module Loaded...");
  }
}
