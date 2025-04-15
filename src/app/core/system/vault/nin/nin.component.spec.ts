import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NINComponent } from './nin.component';

describe('NINComponent', () => {
  let component: NINComponent;
  let fixture: ComponentFixture<NINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NINComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
