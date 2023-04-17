import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationType } from 'src/app/services/notification.message';
import { NotificationService } from 'src/app/services/notification.service';
import *  as  codes from '../../../Codes.json';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.scss']
})
export class EditContactsComponent implements OnInit {
  countrycodes: any = (codes as any).default;
  respectiveId: any 
  respectiveData: any
  addContactForm: FormGroup;

  
  constructor(private notificationService: NotificationService,private router:Router,private route:ActivatedRoute, private fb: FormBuilder,private contactsService:ContactsService) { 
    this.respectiveData =window.history.state;
    // this.route.params.subscribe(p =>  this.respectiveId = p)
    // console.log(this.respectiveId)
    console.log(this.respectiveData);
  }
  ngOnInit(): void {

    
    this.addContactForm=this.fb.group({
      name:[this.respectiveData?.name,[Validators.required,Validators.email]],
      countryCode:[`+${this.respectiveData?.countryCode}`,[Validators.required]],
      number:[this.respectiveData?.number,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:[this.respectiveData?.email,[Validators.email]],
      address:[this.respectiveData?.address]
  
    })
    
  }
  checkchange(){
    console.log(this.addContactForm.value.countryCode);
    
  }
  editContact(){
    let id = this.respectiveData?._id
    let payload = {
      'name':this.addContactForm.value.name,
      'countryCode':Number(this.addContactForm.value.countryCode),
      'number':this.addContactForm.value.number,
      'email':this.addContactForm.value.email,
      'address':this.addContactForm.value.address,

    }
    this.contactsService.editContact(id,payload).subscribe(res=>{
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
