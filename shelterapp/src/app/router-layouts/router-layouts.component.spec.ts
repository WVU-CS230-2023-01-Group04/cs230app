import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLayoutsComponent } from './router-layouts.component';

describe('RouterLayoutsComponent', () => {
  let component: RouterLayoutsComponent;
  let fixture: ComponentFixture<RouterLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterLayoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
