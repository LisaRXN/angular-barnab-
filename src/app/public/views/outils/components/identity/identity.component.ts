import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PropertyToolsService } from '../../../../../core/services/property-tools.service';
import { FormErrorComponent } from "../../../../shared/components/form-error/form-error.component";

@Component({
  selector: 'app-identity',
  imports: [
    CommonModule,
    ProgressBarComponent,
    ReactiveFormsModule,
    FormErrorComponent,
    RouterLink
],
  templateUrl: './identity.component.html',
})
export class IdentityComponent {

      private propertyToolsService = inject(PropertyToolsService);
      private router = inject(Router)
      private route = inject(ActivatedRoute)

      checkCGU: boolean = false
      errorMessage: string = ""
      tools: string = ""

      get addressForm() {
        return this.propertyToolsService.form.get('addressForm') as FormGroup;
      }
      get characteristicsForm() {
        return this.propertyToolsService.form.get('characteristicsForm') as FormGroup;
      }
      get identityForm() {
        return this.propertyToolsService.form.get('identityForm') as FormGroup;
      }

      ngOnInit() {
        this.route.data.subscribe((data) => {
          this.tools = data['service'];
        });
      }

      confirmationStep() {
        console.log('error', this.identityForm.get('phone')?.errors);

        if(!this.checkCGU){
          this.errorMessage = "Veuillez acceptez la politique d'utilisation des données personnelles."
          return
        }

        if (this.identityForm.invalid || this.addressForm.invalid || this.characteristicsForm.invalid) {
          this.identityForm.markAllAsTouched();
          this.addressForm.markAllAsTouched();
          this.characteristicsForm.markAllAsTouched();
          this.errorMessage = "Veuillez compléter tous les champs de l'estimation."
          return;
        }else{
          this.tools === "redaction" ? this.router.navigate([`/redaction-annonce-immobiliere/confirmation`]) : this.router.navigate([`/estimation-immobiliere-gratuite/confirmation`])
         }
      }

      acceptCGU() {
        this.checkCGU = !this.checkCGU;
      }
    
    

}
