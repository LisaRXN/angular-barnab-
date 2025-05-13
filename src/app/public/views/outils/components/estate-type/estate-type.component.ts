import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { PropertyToolsService } from '../../../../../core/services/property-tools.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToolsNavigationComponent } from '../tools-navigation/tools-navigation.component';

@Component({
  selector: 'app-estate-type',
  imports: [
    CommonModule,
    ProgressBarComponent,
    ReactiveFormsModule,
    ToolsNavigationComponent,
  ],
  templateUrl: './estate-type.component.html',
})
export class EstateTypeComponent {
  private propertyToolsService = inject(PropertyToolsService);

  get estateTypeForm() {
    return this.propertyToolsService.form.get('estateTypeForm') as FormGroup;
  }
}
