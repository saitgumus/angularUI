import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = environment.path+'/newuser';



  constructor(private http:HttpClient) { }

  

  setUser(user:User){
 
    let _headers = new HttpHeaders();
    _headers.append("Content-Type","application/json");
    this.http.post(this.uri,user,{headers:_headers}).subscribe();
  }


  userValid(userName): Observable<{}>{
    let _headers = new HttpHeaders();
    _headers.append("Content-Type","application/json");

    return this.http.post<{}>(this.uri+'/valid',{"userName":userName},{headers:_headers})
    
  }
}
