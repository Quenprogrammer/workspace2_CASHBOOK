import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimsSocialComponent } from './aims-social.component';

describe('AimsSocialComponent', () => {
  let component: AimsSocialComponent;
  let fixture: ComponentFixture<AimsSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimsSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimsSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
