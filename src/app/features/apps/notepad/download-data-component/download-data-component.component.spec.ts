import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadDataComponentComponent } from './download-data-component.component';

describe('DownloadDataComponentComponent', () => {
  let component: DownloadDataComponentComponent;
  let fixture: ComponentFixture<DownloadDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadDataComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
