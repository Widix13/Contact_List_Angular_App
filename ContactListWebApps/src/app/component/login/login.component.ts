import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  loginObj: any = {
    "Email": "",
    "Password": ""
   }

  // "email": "string@12343",
  // "password": "String1!"
  constructor(private authService: AuthService, private router: Router) { }

  username!: string;
  password!: string;

  login() {
    this.authService.login(this.loginObj) .pipe(
      catchError(error => {
        console.error('Error adding contact:', error);
        if (error.status === 500) {
          alert("Login failed")
        }else{
          alert("Login failed")
        }
        
        return throwError(error);
      })
    ).subscribe(
      (res:any)=> {
      if(res.token){
        alert('login succesful');
        this.authService.storeEmail(this.loginObj.Email)
        this.authService.storeToken(res.token);
        this.router.navigate(['dashboard']);
      }
      }
    );
  }

  ngOnInit(): void {
  }

}
