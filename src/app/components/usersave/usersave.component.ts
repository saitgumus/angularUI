import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user'
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-usersave',
  templateUrl: './usersave.component.html',
  styleUrls: ['./usersave.component.css'],
  providers:[UserService]
})

export class UsersaveComponent implements OnInit {

  userModel = new User('','','','','');

  constructor(private userService:UserService) { 
    
  }

  ngOnInit() {
    
  }


  onSubmit(){
    //console.log(this.userModel);
    this.userService.setUser(this.userModel);
  }

}
