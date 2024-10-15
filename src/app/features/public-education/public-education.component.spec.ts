import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicEducationComponent } from './public-education.component';

describe('PublicEducationComponent', () => {
  let component: PublicEducationComponent;
  let fixture: ComponentFixture<PublicEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
