import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import {DataType  } from "src/app/user_data_type";




@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
user_obj :DataType ={
  name:'',
  username:'',
  gender:'',
  city:'',
  password:'',
  role:''
}
obs_data:any

obj :any={}

errormessage: any = null

  constructor(public gs:GlobalService,public router:Router, public rout :ActivatedRoute , private gs_user : UserServiceService) {
    
   
  }

  ngOnInit(): void { 
    if(!this.gs_user.login_user_data.username){
      this.router.navigateByUrl('/sign-in')
    }
    // this.gs.user
this.rout.queryParams.subscribe(x => this.obj = x  )
console.log(this.obj._id);
  let index = this.gs.user.findIndex((a:any) => a._id == this.obj._id)        
this.user_obj =  {...this.gs.user[index]}
console.log(index)
  }  

  submit(){  
   if(!this.obj._id){
    this.gs.post_user(this.user_obj).subscribe((x)=>{
      console.log(x);
    },(err)=>{
  this.errormessage = err.message
    },()=>{
      console.log('save succefully');
    })   
    this.gs.userdata$.next(true)
   this.router.navigate(['/user_list']) 
  //  console.log(this.user_obj)
   }
   
   else{
    console.log(this.user_obj);
     this.gs.update_user(this.obj._id, this.user_obj).subscribe((s)=>{
    },(err)=>{
      alert(err.message)
    },()=>{
      alert('upadate succefully')
    })
   
   }
     
  
  }





}
