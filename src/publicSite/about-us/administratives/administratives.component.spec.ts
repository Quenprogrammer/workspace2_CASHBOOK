import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativesComponent } from './administratives.component';

describe('AdministrativesComponent', () => {
  let component: AdministrativesComponent;
  let fixture: ComponentFixture<AdministrativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
