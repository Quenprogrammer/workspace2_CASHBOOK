import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckIdentityComponent } from './check-identity.component';

describe('CheckIdentityComponent', () => {
  let component: CheckIdentityComponent;
  let fixture: ComponentFixture<CheckIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckIdentityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
