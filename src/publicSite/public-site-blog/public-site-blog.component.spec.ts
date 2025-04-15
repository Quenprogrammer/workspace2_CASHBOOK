import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteBlogComponent } from './public-site-blog.component';

describe('PublicSiteBlogComponent', () => {
  let component: PublicSiteBlogComponent;
  let fixture: ComponentFixture<PublicSiteBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicSiteBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicSiteBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
