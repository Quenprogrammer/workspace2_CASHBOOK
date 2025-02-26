import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditedComponent } from './credited.component';

describe('CreditedComponent', () => {
  let component: CreditedComponent;
  let fixture: ComponentFixture<CreditedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
