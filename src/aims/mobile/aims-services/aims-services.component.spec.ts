import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimsServicesComponent } from './aims-services.component';

describe('AimsServicesComponent', () => {
  let component: AimsServicesComponent;
  let fixture: ComponentFixture<AimsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimsServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
