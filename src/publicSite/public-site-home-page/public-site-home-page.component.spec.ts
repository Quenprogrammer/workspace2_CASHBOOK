import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteHomePageComponent } from './public-site-home-page.component';

describe('PublicSiteHomePageComponent', () => {
  let component: PublicSiteHomePageComponent;
  let fixture: ComponentFixture<PublicSiteHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicSiteHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicSiteHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
