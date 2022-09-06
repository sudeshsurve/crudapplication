import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
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
  user :any = []
  // expence_form = new FormGroup({
  //   username: new FormControl(''),
  //   date : new FormControl(''),
  //   head : new FormControl(''),
  //   amount : new FormControl(''),
  //   paid_to : new FormControl(''),
  //   })


  constructor(public gs_user : UserServiceService , private rout : Router , public gs: GlobalService) { }

  ngOnInit(): void {
 if(!this.gs_user.login_user_data.username){
   this.rout.navigateByUrl('/sign-in')
   setTimeout(() => {
    this.gs.get_user().subscribe((x)=>{
    this.gs.user= x
    console.log(x);
    
   })
   }, 1000);
   
 }



setTimeout(() => {
   this.gs.get_exp_list().subscribe((x)=>{
  this.gs_user.expenses = x
 }, (err)=>{
  console.log(err.mesage);
 },()=>{
  console.log("get list");  
 })
}, 1000);



  }


  submit(){
   this.gs.post_exp_data(this.expence_form).subscribe((x)=>{
   },(err)=>{
    console.log(err.message);
   },()=>{
    console.log("post succesfully");
   })
   window.location.reload()
  }
}
