import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
user: any
  constructor(private gs : GlobalService) { }

  ngOnInit(): void {
    this.gs.showsingleuser.subscribe((x:any)=>{
      setTimeout(() => {
        this.user = x
      }, 1000);
    },(err)=>{
      alert(err.message)
    },()=>{
      console.log("view details");
      
    })
  }

}
