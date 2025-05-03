import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNotificationsComponent } from './latest-notifications.component';

describe('LatestNotificationsComponent', () => {
  let component: LatestNotificationsComponent;
  let fixture: ComponentFixture<LatestNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
