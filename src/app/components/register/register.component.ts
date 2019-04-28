import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import {CarService} from 'src/app/services/car.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[CarService]
})

export class RegisterComponent implements OnInit {
  
  carModel = new Car('','','','','','','','','','');

  yakit = ['benzin','dizel','benzin+lpg'];


  server_uri = 'https://node-test-238108.appspot.com';

  nodes = ['https://node-test2-238819.appspot.com','https://node-test-238108.appspot.com','http://localhost:8080'];


  constructor(private carService:CarService) { }


  ngOnInit() {
  }

  onSubmit(){
    this.carService.saveNewCar(this.carModel,this.server_uri)
  }



}
