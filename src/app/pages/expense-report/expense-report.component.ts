import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.css']
})
export class ExpenseReportComponent implements OnInit {

  constructor(private gs_user : UserServiceService, private rout : Router) { }

  ngOnInit(): void {
if(!this.gs_user.login_user_data.username){
    this.rout.navigateByUrl('/sign-in')
}

    this.sudesh()
  }


 month: any= []
  data :any= {}
  head : any = []

sudesh(){
  let get_data = this.gs_user.get_user_expence(this.gs_user.expenses ,this.gs_user.login_user_data?.username)
this.month = get_data.month
this.data = get_data.data
this.head = get_data.head
console.log(this.month);

}

}
