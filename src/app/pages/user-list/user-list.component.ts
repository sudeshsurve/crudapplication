import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  search :any
 
  constructor(public gs:GlobalService) {
    


   }

  ngOnInit(): void {
    this.gs.get_user().subscribe((x)=> {
      console.log(x)
    this.gs.user = x })
    console.log(this.gs.user);

  } 
  remove(id:any, i:any ){
    this.gs.delete_user(id).subscribe()
    this.gs.user.splice(i, 1)
  }
 

}
