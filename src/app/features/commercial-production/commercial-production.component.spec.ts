import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialProductionComponent } from './commercial-production.component';

describe('CommercialProductionComponent', () => {
  let component: CommercialProductionComponent;
  let fixture: ComponentFixture<CommercialProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialProductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
