import { HttpClient, HttpHeaders} from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { DataType } from "./user_data_type";
import { expencetype } from "./user_data_type";
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  //  data :any= [
  //       { id: 2, date: '4-03-2022', attandance: 'present' },
  //       { id: 4, date: '1-04-2022', attandance: 'absent' },
  //       { id: 4, date: '1-03-2022', attandance: 'present' },
  //       { id: 4, date: '5-04-2022', attandance: 'present' },
  //       { id: 1, date: '5-02-2022', attandance: 'absent' },
  //       { id: 3, date: '6-04-2022', attandance: 'absent' },
  //       { id: 3, date: '4-03-2022', attandance: 'present' },
  //       { id: 3, date: '4-01-2022', attandance: 'present' },
  //       { id: 1, date: '1-01-2022', attandance: 'absent' },
  //       { id: 3, date: '4-03-2022', attandance: 'present' },
  //       { id: 1, date: '1-02-2022', attandance: 'absent' },
  //       { id: 2, date: '2-03-2022', attandance: 'absent' },
  //       { id: 2, date: '1-02-2022', attandance: 'present' },
  //       { id: 3, date: '2-02-2022', attandance: 'present' },
  //       { id: 2, date: '6-02-2022', attandance: 'present' },
  //       { id: 3, date: '1-03-2022', attandance: 'absent' },
  //       { id: 2, date: '4-04-2022', attandance: 'present' },
  //       { id: 4, date: '3-01-2022', attandance: 'present' },
  //       { id: 3, date: '1-04-2022', attandance: 'present' },
  //       { id: 2, date: '5-02-2022', attandance: 'absent' }
  //     ]



  user:any=[]
  str:any =''
  userdata$ = new Subject<any>()

showsingleuser = new EventEmitter<DataType>()

clickdata(user:DataType){
  this.showsingleuser.emit(user)
}
  constructor(public http:HttpClient) {           
      

    
  }


  get_exp_list():Observable<expencetype>{
    let headers = new HttpHeaders()
  headers .set('content-type', 'application/json')
  headers .set('Access-Control-Allow-Origin', '*')
  return this.http.get<expencetype>('http://localhost:3000/get_exp_list' , {headers : headers})
  }

post_exp_data(body:any):Observable<expencetype>{
  let headers = new HttpHeaders()
  headers .set('content-type', 'application/json')
  headers .set('Access-Control-Allow-Origin', '*')
return this.http.post<expencetype>('http://localhost:3000/exp_data' , body)
}


 get_user():Observable<any>{
  let header = new HttpHeaders({
'content-type' :' Appliction/json'
  })
  return this.http.get('http://localhost:3000/user' , {headers: header})
}

post_user(data:any):Observable<DataType> {
  let headers = new HttpHeaders()
headers .set('content-type', 'application/json')
headers .set('Access-Control-Allow-Origin', '*')
 return this.http.post<DataType>('http://localhost:3000/post_data' , data , {headers:headers} )
}




 delete_user(id:any):Observable<DataType>{
  let header = new HttpHeaders({
    'content-type' :' Appliction/json'
      })
  const url = 'http://localhost:3000/' + id
  return  this.http.delete<DataType>(url , {headers:header})
}

update_user(id:any , body:DataType):Observable<DataType>{
  let headers = new HttpHeaders()
  headers .set('content-type', 'application/json')
  headers .set('Access-Control-Allow-Origin', '*')
  console.log(JSON.stringify(id));
  return this.http.put<DataType>('http://localhost:3000/update/' + id, body ,{headers: headers} )
}

}
