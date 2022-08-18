import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  search :any
 errormessage :any = null
  constructor(public gs:GlobalService) {
    


   }

  ngOnInit(): void {
    this.gs.get_user().subscribe((x)=> {
      console.log(x)
    this.gs.user = x },
     (err)=>{
      alert(err.message('something wrong'))
    },()=>{
      console.log("data get succesfully");
    })
    
 

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
 

}
