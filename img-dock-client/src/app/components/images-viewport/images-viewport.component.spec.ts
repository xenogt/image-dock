import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesViewportComponent } from './images-viewport.component';

describe('ImagesViewportComponent', () => {
  let component: ImagesViewportComponent;
  let fixture: ComponentFixture<ImagesViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
