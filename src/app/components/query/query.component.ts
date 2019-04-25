import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../services/transaction.service';

import { Transaction } from 'src/app/models/transaction';
import {Block} from 'src/app/models/block'

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
  
  blocks:any;

  ngOnInit() {
  }


  getTransaction(){
    this.transactionService.getTransaction({"chassisNo":this.queryChassisNo}).subscribe( (r)=>{
      this.blocks = r;
    })
  }


}
