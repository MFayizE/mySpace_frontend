import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NotificationType } from 'src/app/services/notification.message';
import { NotificationService } from 'src/app/services/notification.service';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {
  page = 1;
  limit = 1000
  contactList: any = []
  lastPage: boolean = false
  pageLoader:boolean = false
  search:any
  email = new BehaviorSubject("");
  constructor(private notificationService: NotificationService,private router:Router,private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.fetchList()
  }
  emailHandler(input:any) {
    this.email.next(input);
    this.search = this.email?.value
    this.fetchList()

  }

 fetchList() {
  this.pageLoader=true
  this.contactsService.getAllContacts(this.page, this.limit,this.search).subscribe(res => {
    this.pageLoader=false

      this.contactList = res
      if (this.contactList?.contacts?.length < 5) {
        this.lastPage = true
      }
    })

    console.log(this.contactList)

  }
  next() {
    this.page += 1
    console.log(this.page)
    this.fetchList()
  }
  prev() {
    this.page -= 1
    this.fetchList()
    this.lastPage = false

  }
  editContact(data){
    this.router.navigate([`contacts/edit`,data._id] , {state:{...data} }); 
  }
  deleteContact(data){
    if(confirm("Are you sure to delete "+data.name)) {
      this.contactsService.deleteContact(data?._id).subscribe(res => {
        console.log(res);
        alert('Delete Successful')
        if(res){
          this.notificationService.sendMessage({
            message: 'Delete Successful',
            type: NotificationType.success
          });
          this.fetchList()
        }
        else{
          this.notificationService.sendMessage({
            message: 'Something went wrong',
            type: NotificationType.error
          });
        }
       
        }) 
    }
  }

}
