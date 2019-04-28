import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import {Transaction} from '../models/transaction'
import { Observable } from 'rxjs';
import {Block} from 'src/app/models/block'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  //uri = environment.path;

  constructor(private http:HttpClient) { }


  
  sendTransaction(transaction:Transaction,uri){
    let _headers = new HttpHeaders();
    _headers.append("Content-Type","application/json");

    this.http.post(uri+'/newTransaction',transaction,{headers: _headers}).subscribe(r => {
      console.log(r);
    });
  }



  getTransaction(data,uri):Observable<Block[]>{
    let _headers = new HttpHeaders();
    _headers.append("Content-Type","application/json");

    return this.http.post<Block[]>(uri+'/queryTransaction',data,{headers:_headers});
  }

}
