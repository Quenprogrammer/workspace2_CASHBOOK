import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensisComponent } from './expensis.component';

describe('ExpensisComponent', () => {
  let component: ExpensisComponent;
  let fixture: ComponentFixture<ExpensisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
