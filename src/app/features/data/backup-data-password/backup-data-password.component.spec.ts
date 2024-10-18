import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupDataPasswordComponent } from './backup-data-password.component';

describe('BackupDataPasswordComponent', () => {
  let component: BackupDataPasswordComponent;
  let fixture: ComponentFixture<BackupDataPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackupDataPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackupDataPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
