import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimsMobileHomeComponent } from './aims-mobile-home.component';

describe('AimsMobileHomeComponent', () => {
  let component: AimsMobileHomeComponent;
  let fixture: ComponentFixture<AimsMobileHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimsMobileHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimsMobileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
