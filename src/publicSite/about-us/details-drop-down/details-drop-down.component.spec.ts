import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDropDownComponent } from './details-drop-down.component';

describe('DetailsDropDownComponent', () => {
  let component: DetailsDropDownComponent;
  let fixture: ComponentFixture<DetailsDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsDropDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
