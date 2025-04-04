import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryComponent } from './industry.component';

describe('IndustryComponent', () => {
  let component: IndustryComponent;
  let fixture: ComponentFixture<IndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
