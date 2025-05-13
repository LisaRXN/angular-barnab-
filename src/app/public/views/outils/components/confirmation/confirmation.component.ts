import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PropertyToolsService } from '../../../../../core/services/property-tools.service';
import { FormGroup } from '@angular/forms';
import { ToolsGateway } from '../../../../../core/ports/tools.gateaway';
import { SuccessEstimationComponent } from './components/success-estimation';
import { SuccessRedactionComponent } from './components/success-redaction';
import { OverlimitComponent } from './components/overlimit';
import { ErrorComponent } from './components/error';
import { LoadingComponent } from './components/loading';

@Component({
  selector: 'app-confirmation',
  imports: [
    CommonModule,
    ProgressBarComponent,
    RouterLink,
    SuccessEstimationComponent,
    SuccessRedactionComponent,
    OverlimitComponent,
    ErrorComponent,
    LoadingComponent,
  ],
  templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private propertyToolsService = inject(PropertyToolsService);
  private toolsGateway = inject(ToolsGateway);

  tools: string = '';
  displayTool!: string;
  successRequest: boolean = false;
  errorMessage!: string;
  isLoading: boolean = true;
  lowPrice: string = '';
  midPrice: string = '';
  highPrice: string = '';
  overlimit: boolean = false;

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
      this.displayTool =
        this.tools === 'estimation' ? 'estimation' : 'rédaction';
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
          this.isLoading = false;
          if (err.status === 400) {
            this.errorMessage =
              err.error.response.message || 'Requête invalide';
            this.overlimit = true;
          } else {
            this.successRequest = false;
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
            this.overlimit = true;
            this.errorMessage =
              err.error.response.respons || 'Requête invalide';
          } else {
            this.successRequest = false;
            this.errorMessage =
              "Une erreur s'est produite, veuillez recommencer.";
          }
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }

    // this.propertyToolsService.resetForm();
  }
}
