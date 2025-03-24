import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTokenComponent } from './crypto-token.component';

describe('CryptoTokenComponent', () => {
  let component: CryptoTokenComponent;
  let fixture: ComponentFixture<CryptoTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoTokenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
