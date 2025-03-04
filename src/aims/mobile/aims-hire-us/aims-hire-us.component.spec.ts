import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimsHireUsComponent } from './aims-hire-us.component';

describe('AimsHireUsComponent', () => {
  let component: AimsHireUsComponent;
  let fixture: ComponentFixture<AimsHireUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimsHireUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimsHireUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
