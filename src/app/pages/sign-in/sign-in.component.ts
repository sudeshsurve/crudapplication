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
    setTimeout(() => {
      this.gs.get_user().subscribe((x)=> {
          console.log(x)
        this.gs.user = x },
         (err)=>{
          alert(err.message('something wrong'))
        },()=>{
          console.log("data get succesfully");
        })    
    }, 1000);
       
  }

 login(){  
let user = this.gs.user.find((x:any) =>
  x.username ==   this.login_user.username &&
  x.password == this.login_user.password
)
if(user){
  this.gs_user.login_user_data = user
  localStorage.setItem('emp' , JSON.stringify(this.gs_user.login_user_data))
  
this.rout.navigateByUrl('/user_list')
}
  }


}
