import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group, animateChild} from '@angular/animations';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  user:User;
  hoverbar: boolean = false;
  showCategory: string = 'hide';

  constructor() {
    this.user = new User();
    this.user.name = "Dude";
    this.user.loginId = "xeno";
   }

  ngOnInit() {
    console.log(this.user.name);
  }

  toggleCategory(): void {
    this.showCategory = this.showCategory==='hide'?'show':'hide';
  }
}
