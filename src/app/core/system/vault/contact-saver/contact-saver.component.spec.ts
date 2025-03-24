import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSaverComponent } from './contact-saver.component';

describe('ContactSaverComponent', () => {
  let component: ContactSaverComponent;
  let fixture: ComponentFixture<ContactSaverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSaverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
