import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackEncheresComponent } from './pack-encheres.component';

describe('PackEncheresComponent', () => {
  let component: PackEncheresComponent;
  let fixture: ComponentFixture<PackEncheresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackEncheresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackEncheresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
