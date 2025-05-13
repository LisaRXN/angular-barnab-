import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormErrorService {

  getErrorMessage(control: AbstractControl | null): string | null {

    if (!control || !control.errors || !control.touched) return null;

    const errors: ValidationErrors = control.errors;

    if (errors['required']) return 'Ce champ est requis.';
    if (errors['email']) return 'Adresse e-mail invalide.';
    if (errors['min']) return `La valeur minimale est ${errors['min'].min}.`; 
    if (errors['minlength']) return `Minimum ${errors['minlength'].requiredLength} caractères.`;
    if (errors['maxlength']) return `Maximum ${errors['maxlength'].requiredLength} caractères.`;
    if (errors['pattern']) return 'Format invalide.';

    return 'Erreur inconnue.';
  }
}
