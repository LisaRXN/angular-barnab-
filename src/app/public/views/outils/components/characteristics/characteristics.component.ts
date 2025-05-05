import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EstimationService } from '../../../../../core/services/estimation.service';

@Component({
  selector: 'app-characteristics',
  imports: [
    CommonModule,
    ProgressBarComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './characteristics.component.html',
})
export class CharacteristicsComponent {
  private estimationService = inject(EstimationService);
  
  get estateTypeForm() {
    return this.estimationService.form.get('estateTypeForm') as FormGroup;
  }

  get characteristicsForm() {
    return this.estimationService.form.get('characteristicsForm') as FormGroup;
  }
}
