import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidUserComponent } from './invalid-user.component';

describe('InvalidUserComponent', () => {
  let component: InvalidUserComponent;
  let fixture: ComponentFixture<InvalidUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvalidUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
