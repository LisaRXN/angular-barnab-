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

  tools: string = '';
  successRequest!: boolean;
  errorMessage: string = '';
  isLoading: boolean = true;
  lowPrice: string = '';
  midPrice: string = '';
  highPrice: string = '';

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

    const datas = this.propertyToolsService.formattedToolsDatas;

    if (this.tools === 'estimation') {
      this.toolsGateway.sendValuation(datas).subscribe({
        next: (data) => {
          console.log('data', data);

          if (data.status == 200 && data.body.response) {
            this.successRequest = true;
            const { low, mid, high } = data.body.response;
            this.lowPrice = low;
            this.midPrice = mid;
            this.highPrice = high;
          } else {
            this.errorMessage = data.response || 'Erreur inconnue';
          }
        },
        error: (err) => {
          console.error('Erreur API', err);
          this.successRequest = false;
          this.isLoading = false;
          if (err.status === 400) {
            this.errorMessage =
              err.error.response.message || 'Requête invalide';
          } else {
            this.errorMessage =
              "Une erreur s'est produite, veuillez recommencer.";
          }
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    } else if (this.tools === 'redaction') {
      this.toolsGateway.sendAdvertising(datas).subscribe({
        next: (data) => {
          console.log('data', data);
          console.log('status', data.status);
          this.isLoading = true;

          if (data.status == 200) {
            this.successRequest = true;
          } else {
            this.errorMessage = data.response || 'Erreur inconnue';
          }
        },
        error: (err) => {
          console.error('Erreur API', err);
          this.isLoading = false;
          if (err.status === 400) {
            this.errorMessage =
              err.error.response.message || 'Requête invalide';
          } else {
            this.errorMessage =
              "Une erreur s'est produite, veuillez recommencer.";
          }
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }

    this.propertyToolsService.resetForm();
  }
}
