import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteDashboardComponent } from './public-site-dashboard.component';

describe('PublicSiteDashboardComponent', () => {
  let component: PublicSiteDashboardComponent;
  let fixture: ComponentFixture<PublicSiteDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicSiteDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicSiteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
