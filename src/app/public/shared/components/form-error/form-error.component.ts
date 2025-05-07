import { Component, inject, Input } from '@angular/core';
import { FormErrorService } from '../../../../core/services/form-error.service';
import { AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-error',
  imports: [CommonModule],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.scss'
})
export class FormErrorComponent {

  formErrorService = inject(FormErrorService)

  @Input() control!: AbstractControl | null;


}
