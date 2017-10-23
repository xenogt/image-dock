import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User;

  constructor() {
    this.user = new User();
    this.user.name = "Dude";
    this.user.loginId = "xeno";
   }

  ngOnInit() {
    console.log(this.user.name);
  }

}
