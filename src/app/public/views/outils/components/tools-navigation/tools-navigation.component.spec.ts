import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsNavigationComponent } from './tools-navigation.component';

describe('ToolsNavigationComponent', () => {
  let component: ToolsNavigationComponent;
  let fixture: ComponentFixture<ToolsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
