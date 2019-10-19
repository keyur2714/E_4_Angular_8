import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';

  constructor(private router: Router,private authService : AuthService) { }

  ngOnInit() {
  }

  login() : void {
    this.authService.authenticate(this.username,this.password).subscribe(
      (data)=>{
        if(data !== undefined && data !== null){
          this.authService.isLoggedIn = true;          
          sessionStorage.setItem("currentUser",JSON.stringify(data));
          this.router.navigate(['/home']);
        }else{
          alert("Invalid Username or password.");
          this.authService.isLoggedIn = false;
        }
      }
    )

    
  }

}
