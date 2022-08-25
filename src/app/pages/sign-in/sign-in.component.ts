import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  login_user  ={
    username : '',
    password : ''
  }
  constructor(private gs_user : UserServiceService , private gs : GlobalService , private rout : Router) { }
  ngOnInit(): void {
   
    
  }

 login(){  
let user = this.gs_user.users.find((x:any) =>
  x.username ==   this.login_user.username &&
  x.password == this.login_user.password
)
if(user){
  this.gs_user.login_user_data = user
this.rout.navigateByUrl('/expense-form')
}
  }


}
