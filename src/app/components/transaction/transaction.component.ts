import { Component, OnInit, Inject } from '@angular/core';
import { TransactionService} from '../../services/transaction.service';
import {CarService} from 'src/app/services/car.service';
import {UserService} from 'src/app/services/user.service'
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
declare let alertify:any;


export interface DialogData {
  name: string;
  password: string;
}


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers:[CarService,TransactionService,UserService]
})

export class TransactionComponent implements OnInit {


  server_uri = 'https://node-test-238108.appspot.com';

  nodes = ['https://node-test2-238819.appspot.com',
          'https://node-test3.appspot.com',
          'https://node-test-238108.appspot.com',
          'http://localhost:8080'];


  transactionModel:any = {};
   userPassword:string;

  constructor(private transactionService: TransactionService,private carService:CarService,private userService:UserService, private dialog:MatDialog) { }

  ngOnInit() {

  }

getPassword(){

  return new Promise(
    (resolve,reject)=>{

      const dialogRef = this.dialog.open(DialogLogin,{
        width:'500px',
        data:{name:this.transactionModel.user,
              password:''}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.userPassword = result;

          this.userService.userLogin(this.transactionModel.user,this.userPassword ,this.server_uri).subscribe(
            r=>{
              if(r["durum"] == 1)
                resolve(1)
                else reject('parola doğru değil.')
            }
          )

        }
      });
    }
  )
}

  onSubmit(){

    this.validCar(1).then( (data)=>{
      if(data == 1){
       return this.validUser(1)
      }else alertify.error('arac kayıtlarda bulunamadı');
    }).then( (data)=>{
      if(data == 1){
        this.getPassword().then(
          r=>{
            this.transactionService.sendTransaction(this.transactionModel,this.server_uri);
             alertify.success('islem alındı');
          }
        ).catch( e=>{alertify.error(e)})
        
      }else alertify.error('kullanıcı kayıtlarda bulunamadı.');
    }).catch( (mesaj)=>{
      alertify.error(mesaj);
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

@Component({
  selector: 'dialog-login',
  templateUrl: 'dialog-login.html',
})
export class DialogLogin {
  constructor(public dialogRef:MatDialogRef<DialogLogin>, @Inject(MAT_DIALOG_DATA) public data:DialogData){}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}


