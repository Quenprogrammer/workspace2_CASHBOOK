import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HieUsComponent } from './hie-us.component';

describe('HieUsComponent', () => {
  let component: HieUsComponent;
  let fixture: ComponentFixture<HieUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HieUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HieUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
