import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/services/notification.message';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  responseData:any
  RegisterForm=this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(4)]],    
    confirmpassword:['',[Validators.required,Validators.minLength(4)]]    

  })
  constructor(private notificationService: NotificationService,private fb: FormBuilder,private service:AuthService, private router:Router) { }

  ngOnInit(): void {
    sessionStorage.clear()

  }
  proceedRegister(){
    if(this.RegisterForm.value.confirmpassword === this.RegisterForm.value.password){
      let payload = {
        "name": this.RegisterForm.value.name,
        "email": this.RegisterForm.value.email,
        "password": this.RegisterForm.value.password
      }
      this.service.proceedRegister(payload).subscribe(res=>{
        if(res){
          this.responseData = res
          sessionStorage.setItem('token',this.responseData.token)
          this.notificationService.sendMessage({
            message: 'Registration Successful',
            type: NotificationType.success
          });
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
  }

}
