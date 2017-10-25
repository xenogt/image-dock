import { Component, OnInit, OnChanges} from '@angular/core';
// import { trigger, state, style, animate, transition, group, animateChild} from '@angular/animations';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User;
  showCategory: string = 'hide';
  hasCategory: boolean = false;
  expandCat: boolean = false;

  constructor() {
    this.user = new User();
    this.user.name = "Dude";
    this.user.loginId = "xeno";
   }

  ngOnInit() {
    console.log(this.user.name);
  }

  toggleCategory(): void {
    this.expandCat = !this.expandCat;
    // this.showCategory = this.showCategory==='hide'?'show':'hide';
    this.showCategory = this.expandCat ? 'show' : 'hide';
  }
}
