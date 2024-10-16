import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitsRecordsComponent } from './debits-records.component';

describe('DebitsRecordsComponent', () => {
  let component: DebitsRecordsComponent;
  let fixture: ComponentFixture<DebitsRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitsRecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebitsRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
