import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingSmallComponent } from './heading-small.component';

describe('HeadingSmallComponent', () => {
  let component: HeadingSmallComponent;
  let fixture: ComponentFixture<HeadingSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
