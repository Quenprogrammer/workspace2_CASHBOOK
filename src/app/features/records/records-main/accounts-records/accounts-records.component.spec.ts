import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsRecordsComponent } from './accounts-records.component';

describe('AccountsRecordsComponent', () => {
  let component: AccountsRecordsComponent;
  let fixture: ComponentFixture<AccountsRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsRecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
