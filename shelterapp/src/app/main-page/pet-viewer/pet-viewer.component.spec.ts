import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetViewerComponent } from './pet-viewer.component';

describe('PetViewerComponent', () => {
  let component: PetViewerComponent;
  let fixture: ComponentFixture<PetViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
