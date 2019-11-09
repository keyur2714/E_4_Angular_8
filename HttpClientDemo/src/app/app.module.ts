import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CourseModule } from './course/course.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,        
    LoginComponent,
    LogoutComponent
  ],
  entryComponents : [    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,    
    BrowserAnimationsModule,    
    AppRoutingModule,        
    SharedModule,
    //CourseModule    
  ],
  providers: [  
    AuthGuard,      
    AuthService,
    {
      provide : HTTP_INTERCEPTORS , useClass : AuthInterceptor , multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Loaded...");
  }
}
