import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPLoginComponent } from './otplogin.component';

describe('OTPLoginComponent', () => {
  let component: OTPLoginComponent;
  let fixture: ComponentFixture<OTPLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OTPLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OTPLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
