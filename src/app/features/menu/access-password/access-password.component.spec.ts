import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPasswordComponent } from './access-password.component';

describe('AccessPasswordComponent', () => {
  let component: AccessPasswordComponent;
  let fixture: ComponentFixture<AccessPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
