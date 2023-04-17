import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginApi = 'http://localhost:5000/api/users/login'
  registerApi = 'http://localhost:5000/api/users/register'
  constructor(private http:HttpClient) { }

  proceedLogin(data: any){
    return this.http.post(this.loginApi,data)
  }
  proceedRegister(data: any){
    return this.http.post(this.registerApi,data)
  }

  isLogged(){
    return sessionStorage.getItem('token')!=null
  }

  getToken(){
    return sessionStorage.getItem('token') || ''
  }
}
