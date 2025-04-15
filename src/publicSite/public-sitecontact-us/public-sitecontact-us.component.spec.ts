import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSitecontactUsComponent } from './public-sitecontact-us.component';

describe('PublicSitecontactUsComponent', () => {
  let component: PublicSitecontactUsComponent;
  let fixture: ComponentFixture<PublicSitecontactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicSitecontactUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicSitecontactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
