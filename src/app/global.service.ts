import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
  constructor(public http:HttpClient) {           
      

    
  }

 get_user():Observable<any>{
  let header = new HttpHeaders({
'content-type' :' Appliction/json'
  })
  return this.http.get('http://localhost:3000/user' , {headers: header})
}

post_user(data:any):Observable<any> {
  let header = new HttpHeaders({
    'content-type' :' Applicttion/json'
      })
 return this.http.post('http://localhost:3000/post_data' , data )
 
  
}

 delete_user(id:any):Observable<any>{
  let header = new HttpHeaders({
    'content-type' :' Appliction/json'
      })
  const url = 'http://localhost:3000/' + id
  return  this.http.delete(url , {headers:header})
}
update_user(id:any , body:any):Observable<any>{
  console.log(JSON.stringify(id));
  return this.http.put('http://localhost:3000/update/' + id, body )
}

}
