import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCreditedComponent } from './total-credited.component';

describe('TotalCreditedComponent', () => {
  let component: TotalCreditedComponent;
  let fixture: ComponentFixture<TotalCreditedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCreditedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCreditedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
