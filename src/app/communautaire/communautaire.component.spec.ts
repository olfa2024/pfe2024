import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunautaireComponent } from './communautaire.component';

describe('CommunautaireComponent', () => {
  let component: CommunautaireComponent;
  let fixture: ComponentFixture<CommunautaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunautaireComponent]
    });
    fixture = TestBed.createComponent(CommunautaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
