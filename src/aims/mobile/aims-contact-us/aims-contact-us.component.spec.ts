import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimsContactUsComponent } from './aims-contact-us.component';

describe('AimsContactUsComponent', () => {
  let component: AimsContactUsComponent;
  let fixture: ComponentFixture<AimsContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimsContactUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimsContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
