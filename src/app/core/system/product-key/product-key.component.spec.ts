import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductKeyComponent } from './product-key.component';

describe('ProductKeyComponent', () => {
  let component: ProductKeyComponent;
  let fixture: ComponentFixture<ProductKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductKeyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
