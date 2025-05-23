import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidAccountComponent } from './invalid-account.component';

describe('InvalidAccountComponent', () => {
  let component: InvalidAccountComponent;
  let fixture: ComponentFixture<InvalidAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvalidAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
