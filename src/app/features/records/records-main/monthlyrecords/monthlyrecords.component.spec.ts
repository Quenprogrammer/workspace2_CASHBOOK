import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyrecordsComponent } from './monthlyrecords.component';

describe('MonthlyrecordsComponent', () => {
  let component: MonthlyrecordsComponent;
  let fixture: ComponentFixture<MonthlyrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyrecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
