import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsAndFiguresComponent } from './facts-and-figures.component';

describe('FactsAndFiguresComponent', () => {
  let component: FactsAndFiguresComponent;
  let fixture: ComponentFixture<FactsAndFiguresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactsAndFiguresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactsAndFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
