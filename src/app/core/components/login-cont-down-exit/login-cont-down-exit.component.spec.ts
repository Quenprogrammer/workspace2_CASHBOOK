import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContDownExitComponent } from './login-cont-down-exit.component';

describe('LoginContDownExitComponent', () => {
  let component: LoginContDownExitComponent;
  let fixture: ComponentFixture<LoginContDownExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginContDownExitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginContDownExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
