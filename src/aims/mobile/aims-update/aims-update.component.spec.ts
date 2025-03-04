import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimsUpdateComponent } from './aims-update.component';

describe('AimsUpdateComponent', () => {
  let component: AimsUpdateComponent;
  let fixture: ComponentFixture<AimsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimsUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
