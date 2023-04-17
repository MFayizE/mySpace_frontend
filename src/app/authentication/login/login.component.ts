import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/services/notification.message';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(4)]]
  })
  responseData: any
  constructor(private notificationService: NotificationService,private fb: FormBuilder, private service:AuthService, private router:Router) { }

  ngOnInit(): void {
 sessionStorage.clear()
}
  proceedLogin(){
    if(this.loginForm.valid){
      this.service.proceedLogin(this.loginForm.value).subscribe(res=>{
        if(res){
          this.responseData = res
          this.notificationService.sendMessage({
            message: 'Login Successful',
            type: NotificationType.success
          });
          sessionStorage.setItem('token',this.responseData.token)
          this.router.navigate([''])
        }
        else{
          this.notificationService.sendMessage({
            message: 'Invalid Credentials',
            type: NotificationType.error
          });
        }
      })
    }
    else{
      this.notificationService.sendMessage({
        message: 'Invalid Credentials',
        type: NotificationType.error
      });
    }
  }
}

