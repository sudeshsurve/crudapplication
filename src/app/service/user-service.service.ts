import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
login_user_data : any ={} = JSON.parse(localStorage.getItem('emp') || '{}')
  constructor( public http : HttpClient) { }

 expenses :any= [
  // { date : '3 Apr 19', head : 'Food', amount : 10, paid_to : 'Wada Pav Wala', username : 'shubham', approved:true },
  // { date : '4 May 19', head : 'Travel', amount : 70, paid_to : 'BEST', username : 'akash', approved:true },
  // { date : '6 Jun 19', head : 'Travel', amount : 70, paid_to : 'BEST', username : 'sandip', approved:false },
  // { date : '6 Dec 19', head : 'Travel', amount : 10, paid_to : 'BEST', username : 'ganesh', approved:true },
  // { date : '6 Sept 19', head : 'Operations', amount : 299, paid_to : 'BEST', username:'akash', approved:false },
]
// 
// 

// users:any = [ 
//   { name : 'Akash', city : 'Vashi', username : 'akash', role: 'Manager', password : 'akash123'},
//   { name : 'Prajwal', city : 'Kalyan', username : 'prajwal', role: 'Manager', password : 'prajwal123'}, 
//   { name : 'Payal', city : 'Panvel', username : 'payal', role: 'User', password : 'payal123'} ,
//   {name : 'Shubham', city : 'Ghansoli', username : 'shubham', role: 'User', password : 'shubhu123' } ,
//   {name : 'sudesh', city : 'Ghansoli', username : 'sudesh', role: 'User', password : 'sudesh123' } 
// ]



// get_exp_list(){
//   let headers = new HttpHeaders()
// headers .set('content-type', 'application/json')
// headers .set('Access-Control-Allow-Origin', '*')
// return this.http.get('localhost:3000/get_exp_list' , {headers : headers})
// }


 

get_user_expence (expenses:any[] , username?:string){
let temp = []
if(username){
  temp = expenses.filter((x :any)=> x.username == username)
}else{
  temp = expenses
}
let months :any = {}
let head :any = {}
let data :any = {}
temp.forEach((x:any )=> {
let  date = new Date(x.date)
let month = date.toLocaleString('defualt' , {month : 'long'})
let year = date.getFullYear()
let key = month + " " + year

months[key] = true
head[x.head] = true
data[key] = data[key] || {}
data[key][x.head] = data[key][x.head] || 0
data[key][x.head] = data[key][x.head] + x.amount
});
return {
  data : data,
  month : Object.keys(months),
  head : Object.keys(head)
}
}
}
