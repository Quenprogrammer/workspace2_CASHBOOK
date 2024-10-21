import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultPasswordComponent } from './vault-password.component';

describe('VaultPasswordComponent', () => {
  let component: VaultPasswordComponent;
  let fixture: ComponentFixture<VaultPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaultPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaultPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
