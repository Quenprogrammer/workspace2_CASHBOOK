import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetBalanceComponent } from './net-balance.component';

describe('NetBalanceComponent', () => {
  let component: NetBalanceComponent;
  let fixture: ComponentFixture<NetBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetBalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
