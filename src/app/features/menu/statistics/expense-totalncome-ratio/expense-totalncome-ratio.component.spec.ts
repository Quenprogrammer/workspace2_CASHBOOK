import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTotalncomeRatioComponent } from './expense-totalncome-ratio.component';

describe('ExpenseTotalncomeRatioComponent', () => {
  let component: ExpenseTotalncomeRatioComponent;
  let fixture: ComponentFixture<ExpenseTotalncomeRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseTotalncomeRatioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseTotalncomeRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
