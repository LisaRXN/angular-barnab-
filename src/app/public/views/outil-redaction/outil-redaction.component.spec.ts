import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutilRedactionComponent } from './outil-redaction.component';

describe('OutilRedactionComponent', () => {
  let component: OutilRedactionComponent;
  let fixture: ComponentFixture<OutilRedactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutilRedactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutilRedactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
