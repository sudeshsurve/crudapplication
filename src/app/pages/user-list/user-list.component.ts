import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  search :any= ''
  hidee :any = true
 errormessage :any = null
 user:any
  constructor(public gs:GlobalService , public gs_user : UserServiceService , private rout : Router) { }

  ngOnInit(): void {
if(!this.gs_user.login_user_data.username){
this.rout.navigateByUrl('/sign-in')
}

this.gs.userdata$.subscribe((x)=>{
this.hidee = x
  console.log(x);
})




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
  remove(id:any, i:any ){
    this.gs.delete_user(id).subscribe((x)=>{
      console.log(x);
    },(err)=>{
      this.errormessage = err.message
    },()=>{
      console.log("delete succesfully");
    })
    this.gs.user.splice(i, 1)
  }
  view_user(x:any){
this.gs.clickdata(x)
  }



changeSerach(eventdata : Event){
// console.log(( <HTMLInputElement>(eventdata.target)).value);
return setTimeout(() => {
this.search = ( <HTMLInputElement>(eventdata.target)).value 
},2000);
  }

  hide(){
    this.hidee = false
  }
}
