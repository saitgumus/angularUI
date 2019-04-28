import { Component, OnInit } from '@angular/core';
import { TransactionService} from '../../services/transaction.service';
import {CarService} from 'src/app/services/car.service';
import {UserService} from 'src/app/services/user.service'
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';



@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers:[CarService,TransactionService,UserService]
})
export class TransactionComponent implements OnInit {


  server_uri = 'https://node-test-238108.appspot.com';

  nodes = ['https://node-test2-238819.appspot.com',
          'https://node-test-238108.appspot.com',
          'http://localhost:8080'];


 transactionModel:any = {};
  constructor(private transactionService: TransactionService,private carService:CarService,private userService:UserService) { }

  ngOnInit() {

  }



  onSubmit(){

    this.validCar(1).then( (data)=>{
      if(data == 1){
       return this.validUser(1)
      }else alert('araç kayıtlarda bulunamadı..');
    }).then( (data)=>{
      if(data == 1){
        this.transactionService.sendTransaction(this.transactionModel,this.server_uri);
        console.log('islem alındı');
      }else alert('kullanıcı kayıtlarda bulunamadı.');
    }).catch( (mesaj)=>{
      alert(mesaj);
    })
  }





//araç doğrulama
    validCar (param:number) {
        return new Promise( (resolve,reject)=>{
          if(param == 1){
            this.carService.validChassisNo(this.transactionModel.chassisNo,this.server_uri).subscribe( r=>{
              resolve(r["durum"]);
            })
          }else{
            reject('araç kayıtlı değil.');
          }
          
         })
      
     
   }


   //kullanıcı doğrulama
   validUser (param:number){
     return new Promise( (resolve,reject)=>{
       if(param==1){
        this.userService.userValid(this.transactionModel.user,this.server_uri).subscribe( r=>{
          resolve (r["durum"]);
         })
       }else{
         reject('kullanıcı yok');
       }
      
     })
   }





  
  

}


