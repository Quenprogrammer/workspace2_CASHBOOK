import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDebitedComponent } from './total-debited.component';

describe('TotalDebitedComponent', () => {
  let component: TotalDebitedComponent;
  let fixture: ComponentFixture<TotalDebitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalDebitedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalDebitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
