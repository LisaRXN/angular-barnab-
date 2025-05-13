import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PropertyToolsService } from '../../../../../core/services/property-tools.service';
import { FormErrorComponent } from '../../../../shared/components/form-error/form-error.component';
import { ToolsNavigationComponent } from '../tools-navigation/tools-navigation.component';

@Component({
  selector: 'app-characteristics',
  imports: [
    CommonModule,
    ProgressBarComponent,
    ReactiveFormsModule,
    FormErrorComponent,
    ToolsNavigationComponent,
  ],
  templateUrl: './characteristics.component.html',
})
export class CharacteristicsComponent {
  private propertyToolsService = inject(PropertyToolsService);

  get estateTypeForm() {
    return this.propertyToolsService.form.get('estateTypeForm') as FormGroup;
  }

  get characteristicsForm() {
    return this.propertyToolsService.form.get(
      'characteristicsForm'
    ) as FormGroup;
  }
}
