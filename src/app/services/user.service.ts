import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  _headers = new HttpHeaders();
  ngOnInit(): void {
    this._headers.append("Content-Type","application/json");

  }

  //uri = environment.path+'/newuser';



  constructor(private http:HttpClient) { }


  setUser(user:User,uri){
 
    // let _headers = new HttpHeaders();
    // _headers.append("Content-Type","application/json");
    this.http.post(uri+'/newuser',user,{headers:this._headers}).subscribe();
  }


  userValid(userName,uri): Observable<{}>{
    // let _headers = new HttpHeaders();
    // _headers.append("Content-Type","application/json");

    return this.http.post<{}>(uri+'/newuser/valid',{"userName":userName},{headers:this._headers})
    
  }

  userLogin(userName,password,uri):Observable<{}>{
    return this.http.post<{}>(uri+'/validpassword',{"userName":userName,
      "password":password},{headers:this._headers})
  }
}
