import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryViewportComponent } from './category-viewport.component';

describe('CategoryViewportComponent', () => {
  let component: CategoryViewportComponent;
  let fixture: ComponentFixture<CategoryViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
