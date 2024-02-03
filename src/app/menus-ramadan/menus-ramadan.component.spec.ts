import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusRamadanComponent } from './menus-ramadan.component';

describe('MenusRamadanComponent', () => {
  let component: MenusRamadanComponent;
  let fixture: ComponentFixture<MenusRamadanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenusRamadanComponent]
    });
    fixture = TestBed.createComponent(MenusRamadanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
