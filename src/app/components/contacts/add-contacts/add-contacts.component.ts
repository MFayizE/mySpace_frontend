import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/services/notification.message';
import { NotificationService } from 'src/app/services/notification.service';
import *  as  codes from '../../../Codes.json';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss']
})
export class AddContactsComponent implements OnInit {
  addContactForm=this.fb.group({
    name:['',[Validators.required,Validators.email]],
    countryCode:['',[Validators.required]],
    number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    email:['',[Validators.email]],
    address:['']

  })
  countrycodes: any = (codes as any).default;


  constructor(private router:Router,private fb: FormBuilder,private contactsService:ContactsService, private notificationService: NotificationService) { }
  ngOnInit(): void {
    console.log(this.countrycodes)
    
  }

  addContact(){
    let payload = {
      'name':this.addContactForm.value.name,
      'countryCode':Number(this.addContactForm.value.countryCode),
      'number':this.addContactForm.value.number,
      'email':this.addContactForm.value.email,
      'address':this.addContactForm.value.address,

    }
    this.contactsService.addContact(payload).subscribe(res=>{
      console.log(res)
      this.notificationService.sendMessage({
        message: 'Contact Creation Successful',
        type: NotificationType.success
      });
      this.router.navigate(['contacts'])
    })
    error => {
      this.notificationService.sendMessage({
        message: 'Something went wrong',
        type: NotificationType.error
      });
    }
  }

  


}
