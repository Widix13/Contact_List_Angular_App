import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiPath } from '../enums/apiPath.enum';

@Injectable()
export class AuthService {
private baseUrl = environment.baseUrl;
constructor(private httpClient: HttpClient, private route: Router) { }

login(loginObj: any){
    let url = `${this.baseUrl}${ApiPath.Login}`;
    return this.httpClient.post(url, loginObj);
}
storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue);
}
storeEmail(storeEmail: string){
    localStorage.setItem('email', storeEmail);
}
getEmail(){
    return localStorage.getItem('email');
}
getToken(){
    return localStorage.getItem('token');
}
isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
}
LogOut(){
    localStorage.removeItem('token');
    this.route.navigate(['login'])
}

}
