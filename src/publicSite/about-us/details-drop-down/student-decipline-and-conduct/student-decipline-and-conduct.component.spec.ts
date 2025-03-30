import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeciplineAndConductComponent } from './student-decipline-and-conduct.component';

describe('StudentDeciplineAndConductComponent', () => {
  let component: StudentDeciplineAndConductComponent;
  let fixture: ComponentFixture<StudentDeciplineAndConductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDeciplineAndConductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDeciplineAndConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
