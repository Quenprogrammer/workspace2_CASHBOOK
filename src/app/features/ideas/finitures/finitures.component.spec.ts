import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinituresComponent } from './finitures.component';

describe('FinituresComponent', () => {
  let component: FinituresComponent;
  let fixture: ComponentFixture<FinituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinituresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
