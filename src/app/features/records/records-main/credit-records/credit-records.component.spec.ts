import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRecordsComponent } from './credit-records.component';

describe('CreditRecordsComponent', () => {
  let component: CreditRecordsComponent;
  let fixture: ComponentFixture<CreditRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditRecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
