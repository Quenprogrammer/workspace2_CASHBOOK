import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituationPoliciesComponent } from './instituation-policies.component';

describe('InstituationPoliciesComponent', () => {
  let component: InstituationPoliciesComponent;
  let fixture: ComponentFixture<InstituationPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstituationPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituationPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
