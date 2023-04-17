import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/services/notification.message';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  constructor(private notificationService: NotificationService,private router:Router) { }

  ngOnInit(): void {
  }
  signOut(){
    if(confirm("Are you sure to log out? ")) {
      this.notificationService.sendMessage({
        message: 'Logout Successfull',
        type: NotificationType.success
      });
      this.router.navigate(['login'])
    }
    
    
  }
}
