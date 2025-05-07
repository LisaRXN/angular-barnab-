import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PropertyToolsService } from '../../../../../core/services/property-tools.service';
import { FormGroup } from '@angular/forms';
import { ToolsGateway } from '../../../../../core/ports/tools.gateaway';

@Component({
  selector: 'app-confirmation',
  imports: [CommonModule, ProgressBarComponent, RouterLink],
  templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private propertyToolsService = inject(PropertyToolsService);
  private toolsGateway = inject(ToolsGateway);

  tools:string = ""

  errorMessage: string = '';

  get addressForm() {
    return this.propertyToolsService.form.get('addressForm') as FormGroup;
  }
  get characteristicsForm() {
    return this.propertyToolsService.form.get(
      'characteristicsForm'
    ) as FormGroup;
  }
  get identityForm() {
    return this.propertyToolsService.form.get('identityForm') as FormGroup;
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.tools = data['service'];
    });

    if (
      this.identityForm.invalid ||
      this.addressForm.invalid ||
      this.characteristicsForm.invalid
    ) {
      this.identityForm.markAllAsTouched();
      this.addressForm.markAllAsTouched();
      this.characteristicsForm.markAllAsTouched();
      this.tools === '/estimation' 
        ? this.router.navigate(['/estimation-immobiliere-gratuite/address'])
        : this.router.navigate(['/redaction-annonce-immobiliere/address'])
 
    } else {

      const datas = this.propertyToolsService.formattedToolsDatas;
      this.tools === 'estimation'
        ? this.toolsGateway.sendValuation(datas)
        : this.toolsGateway.sendAdvertising(datas);
    }

    // this.propertyToolsService.resetForm();
  }
}
