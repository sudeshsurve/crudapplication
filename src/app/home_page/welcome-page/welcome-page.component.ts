import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
user: any
  constructor(private gs_user : UserServiceService , private gs : GlobalService , private rout : Router) { }

  ngOnInit(): void {
    if(!this.gs_user.login_user_data.username){
  this.rout.navigateByUrl('/sign-in')
    }
    this.gs.showsingleuser.subscribe((x:any)=>{
      setTimeout(() => {
        this.user = x
      }, 1000);
    },(err)=>{
      alert(err.message)
    },()=>{
      console.log("view details");
      
    })
    this.sudesh()
  }
  month: any= []
  data :any= {}
  head : any = []

sudesh(){
  let get_data = this.gs_user.get_user_expence(this.gs_user.expenses)
this.month = get_data.month
this.data = get_data.data
this.head = get_data.head
console.log(this.month);

}

}
