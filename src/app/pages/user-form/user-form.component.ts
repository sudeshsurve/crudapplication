import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';





@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
user_obj  ={
  name:'',
  username:'',
  gender:'',
  city:'',
}
obs_data:any

u_d:any
obj :any={}

  constructor(public gs:GlobalService,public router:Router, public rout :ActivatedRoute) {
 this.gs.userdata$.subscribe(x=> this.u_d= x)
    
   
  }

  ngOnInit(): void { 
    // this.gs.user
this.rout.queryParams.subscribe(x => this.obj = x  )
  let index = this.gs.user.findIndex((a:any) => a._id == this.obj._id)        
this.user_obj =  {...this.gs.user[index]}
console.log(index)



  }  

  submit(){  
   if(!this.obj._id){
    this.gs.post_user(this.user_obj).subscribe()   
   this.router.navigate(['/user_list'])
  //  this.gs.get_user() 
   console.log(this.user_obj)
   }
     
  
  }

update(){
    this.gs.update_user(this.obj.id,this.user_obj).subscribe()
    this.router.navigate(['/user_list'])

}




}
