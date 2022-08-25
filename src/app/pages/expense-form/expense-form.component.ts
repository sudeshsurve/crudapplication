import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user-service.service';
import { expencetype } from "src/app/user_data_type";
@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  expence_form :expencetype ={
    username:'',
    date : '',
    head:'',
    amount: 0,
    paid_to:''
  }
  // expence_form = new FormGroup({
  //   username: new FormControl(''),
  //   date : new FormControl(''),
  //   head : new FormControl(''),
  //   amount : new FormControl(''),
  //   paid_to : new FormControl(''),
  //   })


  constructor(public gs_user : UserServiceService) { }

  ngOnInit(): void {

  }

  submit(){
    this.gs_user.expenses.push(this.expence_form)
   localStorage.setItem('key' , JSON.stringify(this.gs_user.expenses))
     


  }
}
