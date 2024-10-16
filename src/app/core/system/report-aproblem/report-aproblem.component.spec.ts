import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAproblemComponent } from './report-aproblem.component';

describe('ReportAproblemComponent', () => {
  let component: ReportAproblemComponent;
  let fixture: ComponentFixture<ReportAproblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportAproblemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportAproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
