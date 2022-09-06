import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:string= 'sudesh'
  
  constructor(public gs:GlobalService , public gs_user: UserServiceService) { }



  ngOnInit(): void {
    
  }
  log_out(){
    localStorage.clear()
    window.location.reload()
  }

}
