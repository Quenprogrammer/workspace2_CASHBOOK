import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAspectComponent } from './core-aspect.component';

describe('CoreAspectComponent', () => {
  let component: CoreAspectComponent;
  let fixture: ComponentFixture<CoreAspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreAspectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreAspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
