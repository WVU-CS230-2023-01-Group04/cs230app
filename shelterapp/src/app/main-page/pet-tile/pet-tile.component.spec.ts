import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetTileComponent } from './pet-tile.component';

describe('PetTileComponent', () => {
  let component: PetTileComponent;
  let fixture: ComponentFixture<PetTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
