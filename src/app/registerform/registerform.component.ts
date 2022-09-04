import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Usermodel } from '../usermodel';

@Component({
  selector: 'ns-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  user:Usermodel={
    password:'',
    username:''
  }
  constructor() { }

  ngOnInit(): void {


  }

  register(user:Usermodel){
    // marche uniquement si les nom sont les mêmes
    console.log(user.password, user.username);
  }
}
