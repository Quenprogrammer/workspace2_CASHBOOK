import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimsTeamsComponent } from './aims-teams.component';

describe('AimsTeamsComponent', () => {
  let component: AimsTeamsComponent;
  let fixture: ComponentFixture<AimsTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimsTeamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimsTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
