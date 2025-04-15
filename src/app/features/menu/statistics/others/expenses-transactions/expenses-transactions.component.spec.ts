import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesTransactionsComponent } from './expenses-transactions.component';

describe('ExpensesTransactionsComponent', () => {
  let component: ExpensesTransactionsComponent;
  let fixture: ComponentFixture<ExpensesTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
