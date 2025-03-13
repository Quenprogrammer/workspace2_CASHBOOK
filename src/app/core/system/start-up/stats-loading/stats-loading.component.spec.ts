import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsLoadingComponent } from './stats-loading.component';

describe('StatsLoadingComponent', () => {
  let component: StatsLoadingComponent;
  let fixture: ComponentFixture<StatsLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
