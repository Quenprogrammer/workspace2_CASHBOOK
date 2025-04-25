import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordMenuComponent } from './dashbord-menu.component';

describe('DashbordMenuComponent', () => {
  let component: DashbordMenuComponent;
  let fixture: ComponentFixture<DashbordMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
