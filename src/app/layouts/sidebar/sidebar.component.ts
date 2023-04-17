import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/components/shared.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  respectiveUser:any
  constructor(private router:Router,private shared:SharedService) { 
    this.getUserData()

  }

  ngOnInit(): void {
  }

  getUserData(){
    this.shared.getUser().subscribe(res=>{
      if(res){
        console.log(res)
        this.respectiveUser = res
      }
      else{
        alert('Invalid Credentials')
      }
    })
    console.log(this.respectiveUser)
  }
  
  signOut(){
    alert('Logout Successful')
    this.router.navigate(['login'])
    
  }
}
