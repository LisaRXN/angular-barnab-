import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackReportageComponent } from './pack-reportage.component';

describe('PackReportageComponent', () => {
  let component: PackReportageComponent;
  let fixture: ComponentFixture<PackReportageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackReportageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackReportageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
