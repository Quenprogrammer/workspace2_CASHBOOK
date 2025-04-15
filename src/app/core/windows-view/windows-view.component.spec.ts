import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsViewComponent } from './windows-view.component';

describe('WindowsViewComponent', () => {
  let component: WindowsViewComponent;
  let fixture: ComponentFixture<WindowsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
