import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChancelorWelcomingAddressComponent } from './chancelor-welcoming-address.component';

describe('ChancelorWelcomingAddressComponent', () => {
  let component: ChancelorWelcomingAddressComponent;
  let fixture: ComponentFixture<ChancelorWelcomingAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChancelorWelcomingAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChancelorWelcomingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
