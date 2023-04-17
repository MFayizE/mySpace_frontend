import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  name: any
  constructor(private router:Router,private shared:SharedService) { 
   this.getUserData()

  }

  ngOnInit(): void {
  }

  getUserData(){
    this.shared.getUser().subscribe(res=>{
      if(res){
        console.log(res)
        this.name = res['name']
      }
      else{
        alert('Invalid Credentials')
      }
    })
  }

}
