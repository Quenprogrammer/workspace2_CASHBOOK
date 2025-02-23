import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieptComponent } from './reciept.component';

describe('RecieptComponent', () => {
  let component: RecieptComponent;
  let fixture: ComponentFixture<RecieptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecieptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
