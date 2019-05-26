import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../services/transaction.service';

import { Transaction } from 'src/app/models/transaction';
import {MatTableDataSource} from '@angular/material';



export interface QueryResult {
  index: string;
  timeStamp: string;
  previousHash: number;
  hash: string;
  transactions: Array<string>;
}

export interface Itransaction {
  user: string;
  time: string;
  transaction:string;
  km:string;
  comment:string;
}

let EXPERT_ELEMENT:Itransaction[] = [
  {user:'sait', time:'2:23',transaction:'islem',km:'123',comment:'comment'}
]

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css'],
  providers:[TransactionService]
})
export class QueryComponent implements OnInit {
  
  constructor(private transactionService:TransactionService) { }


  transaction:Transaction[];
  queryChassisNo = '';
  
  blocks:any[]=[];


    server_uri = 'https://node-test-238108.appspot.com';

    nodes = ['https://node-test2-238819.appspot.com',
            'https://node-test-238108.appspot.com',
            'http://localhost:8080',
          'https://node-test3.appspot.com'];
    

  ngOnInit() {

 EXPERT_ELEMENT.push({
  user:'ali',
  time:'2:33',
  transaction:'bakım',
  km:'212321',
  comment:'comment'
})
  }


  getTransaction(){
    this.transactionService.getTransaction({"chassisNo":this.queryChassisNo},this.server_uri).subscribe( (r)=>{
      this.blocks = r;
    })

  }
      
    
  

  reflesh(){
    EXPERT_ELEMENT = [];
    for(let item of this.blocks){
      for(let sit of item.transactions){
      EXPERT_ELEMENT.push(sit);
      }
    }
    this.dataSource = new MatTableDataSource(EXPERT_ELEMENT);
    
  }

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['time', 'user', 'chassisNo', 'km','transaction','comment'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
