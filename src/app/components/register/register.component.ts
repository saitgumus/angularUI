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

  constructor(private carService:CarService) { }


  ngOnInit() {
  }

  onSubmit(){
    this.carService.saveNewCar(this.carModel)
  }



}
