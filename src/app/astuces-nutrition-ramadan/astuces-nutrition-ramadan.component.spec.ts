import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstucesNutritionRamadanComponent } from './astuces-nutrition-ramadan.component';

describe('AstucesNutritionRamadanComponent', () => {
  let component: AstucesNutritionRamadanComponent;
  let fixture: ComponentFixture<AstucesNutritionRamadanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstucesNutritionRamadanComponent]
    });
    fixture = TestBed.createComponent(AstucesNutritionRamadanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
