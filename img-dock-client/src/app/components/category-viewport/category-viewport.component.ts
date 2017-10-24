import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition, group} from '@angular/animations';

@Component({
  selector: 'app-category-viewport',
  templateUrl: './category-viewport.component.html',
  styleUrls: ['./category-viewport.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ height: 0, opacity: 0 })),
      transition('* => *', animate('.7s'))
    ])
  ]
})
export class CategoryViewportComponent implements OnInit, OnChanges {
  constructor() { }

  ngOnInit() {
  }

  @Input() isVisible : boolean;
  visibility = 'shown';

  ngOnChanges() {
   this.visibility = this.isVisible ? 'shown' : 'hidden';
  }
}
