import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimsTagComponent } from './aims-tag.component';

describe('AimsTagComponent', () => {
  let component: AimsTagComponent;
  let fixture: ComponentFixture<AimsTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimsTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimsTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
