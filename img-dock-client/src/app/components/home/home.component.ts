import { Component, OnInit, OnChanges} from '@angular/core';
import { trigger, state, style, animate, transition, group, animateChild} from '@angular/animations';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('hideBar', [
      state('hide' , style({ opacity: 1 })),
      state('show', style({ height: 0, opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class HomeComponent implements OnInit, OnChanges {

  user:User;
  hoverbar: boolean = true;
  showCategory: string = 'hide';

  constructor() {
    this.user = new User();
    this.user.name = "Dude";
    this.user.loginId = "xeno";
   }

  ngOnInit() {
    console.log(this.user.name);
  }

  ngOnChanges() {
    // this.showCategory = this.hoverbar ? 'show' : 'hide';
  }

  toggleCategory(): void {
    this.hoverbar = !this.hoverbar;
    this.showCategory = this.showCategory==='hide'?'show':'hide';
  }
}
