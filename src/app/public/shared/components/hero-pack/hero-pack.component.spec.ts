import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPackComponent } from './hero-pack.component';

describe('HeroPackComponent', () => {
  let component: HeroPackComponent;
  let fixture: ComponentFixture<HeroPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroPackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
