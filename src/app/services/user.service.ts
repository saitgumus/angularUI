import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //uri = environment.path+'/newuser';



  constructor(private http:HttpClient) { }

  

  setUser(user:User,uri){
 
    let _headers = new HttpHeaders();
    _headers.append("Content-Type","application/json");
    this.http.post(uri+'/newuser',user,{headers:_headers}).subscribe();
  }


  userValid(userName,uri): Observable<{}>{
    let _headers = new HttpHeaders();
    _headers.append("Content-Type","application/json");

    return this.http.post<{}>(uri+'/newuser/valid',{"userName":userName},{headers:_headers})
    
  }
}
