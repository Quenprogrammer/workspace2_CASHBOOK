import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftComponent } from './microsoft.component';

describe('MicrosoftComponent', () => {
  let component: MicrosoftComponent;
  let fixture: ComponentFixture<MicrosoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrosoftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
