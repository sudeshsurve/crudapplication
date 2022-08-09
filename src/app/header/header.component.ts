import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:string= 'sudesh'
  
  constructor(public gs:GlobalService) { }



  ngOnInit(): void {
    
  }

}
