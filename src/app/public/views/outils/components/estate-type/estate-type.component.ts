import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { EstimationService } from '../../../../../core/services/estimation.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-estate-type',
  imports: [CommonModule, ProgressBarComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './estate-type.component.html',
})
export class EstateTypeComponent {

    private estimationService = inject(EstimationService);

      get estateTypeForm() {
        return this.estimationService.form.get('estateTypeForm') as FormGroup;
      }
  

}
