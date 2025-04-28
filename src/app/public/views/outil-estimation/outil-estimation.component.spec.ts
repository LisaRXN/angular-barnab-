import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutilEstimationComponent } from './outil-estimation.component';

describe('OutilEstimationComponent', () => {
  let component: OutilEstimationComponent;
  let fixture: ComponentFixture<OutilEstimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutilEstimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutilEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
