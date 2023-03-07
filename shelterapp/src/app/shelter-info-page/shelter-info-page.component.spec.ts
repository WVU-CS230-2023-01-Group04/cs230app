import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterInfoPageComponent } from './shelter-info-page.component';

describe('ShelterInfoPageComponent', () => {
  let component: ShelterInfoPageComponent;
  let fixture: ComponentFixture<ShelterInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelterInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelterInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
