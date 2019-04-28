import { Injectable } from '@angular/core';
import {Car} from 'src/app/models/car'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

 // uri = environment.path +"/newcar";// 'http://localhost:3000/newcar';

  constructor(private http:HttpClient) { }



  saveNewCar(data:Car,uri){
    let _headers = new HttpHeaders();
    _headers.append("Content-Type","application/json");

    this.http.post(uri+'/newcar',data,{headers:_headers}).subscribe(r=>{
      console.log(r);
    });
  }


  validChassisNo(chassisNo,uri):Observable<{}>{
    let _headers = new HttpHeaders();
    _headers.append("Content-Type","application/json");

   return this.http.post<{}>(uri+'/newcar/valid',{"chassisNo":chassisNo},{headers:_headers});
  }
}
