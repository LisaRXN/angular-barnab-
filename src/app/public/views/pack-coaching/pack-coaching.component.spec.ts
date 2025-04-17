import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackCoachingComponent } from './pack-coaching.component';

describe('PackCoachingComponent', () => {
  let component: PackCoachingComponent;
  let fixture: ComponentFixture<PackCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackCoachingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
