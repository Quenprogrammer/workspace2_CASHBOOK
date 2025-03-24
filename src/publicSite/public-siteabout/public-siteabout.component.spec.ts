import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteaboutComponent } from './public-siteabout.component';

describe('PublicSiteaboutComponent', () => {
  let component: PublicSiteaboutComponent;
  let fixture: ComponentFixture<PublicSiteaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicSiteaboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicSiteaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
