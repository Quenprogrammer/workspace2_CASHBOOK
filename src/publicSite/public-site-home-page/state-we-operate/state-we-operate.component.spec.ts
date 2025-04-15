import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWeOperateComponent } from './state-we-operate.component';

describe('StateWeOperateComponent', () => {
  let component: StateWeOperateComponent;
  let fixture: ComponentFixture<StateWeOperateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateWeOperateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateWeOperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
