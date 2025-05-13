import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PropertyToolsService } from '../../../../../core/services/property-tools.service';
import { ToolsNavigationComponent } from '../tools-navigation/tools-navigation.component';

@Component({
  selector: 'app-advantages',
  imports: [
    CommonModule,
    ProgressBarComponent,
    ReactiveFormsModule,
    ToolsNavigationComponent
  ],
  templateUrl: './advantages.component.html',
})
export class AdvantagesComponent {
  private propertyToolsService = inject(PropertyToolsService);

  get advantagesForm() {
    return this.propertyToolsService.form.get('advantagesForm') as FormGroup;
  }
}
