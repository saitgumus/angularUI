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


    server_uri = 'https://node-test-238108.appspot.com';

    nodes = ['https://node-test2-238819.appspot.com',
            'https://node-test-238108.appspot.com',
            'http://localhost:8080'];
    

  ngOnInit() {
  }


  getTransaction(){
    this.transactionService.getTransaction({"chassisNo":this.queryChassisNo},this.server_uri).subscribe( (r)=>{
      this.blocks = r;
    })
  }


}
