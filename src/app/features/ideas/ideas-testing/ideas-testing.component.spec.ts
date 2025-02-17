import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDEASTestingComponent } from './ideas-testing.component';

describe('IDEASTestingComponent', () => {
  let component: IDEASTestingComponent;
  let fixture: ComponentFixture<IDEASTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IDEASTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IDEASTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
