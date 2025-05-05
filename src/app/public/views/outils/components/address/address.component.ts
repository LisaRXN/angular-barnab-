import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  NgZone,
  signal,
  ViewChild,
} from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EstimationService } from '../../../../../core/services/estimation.service';

@Component({
  selector: 'app-address',
  imports: [
    CommonModule,
    ProgressBarComponent,
    GoogleMapsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './address.component.html',
})
export class AddressComponent implements AfterViewInit {
  @ViewChild('addresstext') addresstext!: ElementRef<HTMLInputElement>;

  private ngZone = inject(NgZone);
  private estimationService = inject(EstimationService);

  place: any;
  mapCenter = signal({ lat: 48.8566, lng: 2.3522 }); // Paris par défaut
  zoom = signal(12);
  mapOptions: any = {
    mapType: 'satellite',
    heading: 90,
    tilt: 45,
  };

  get addressForm() {
    return this.estimationService.form.get('addressForm') as FormGroup;
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    if (typeof google === 'undefined' || !google.maps) {
      console.error('Google Maps API non chargé');
      return;
    }

    const options = {
      componentRestrictions: { country: 'FR' },
      types: ['geocode'],
    };

    const autocomplete = new google.maps.places.Autocomplete(
      this.addresstext.nativeElement,
      options
    );

    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        this.place = autocomplete.getPlace();

        if (this.place.geometry === undefined || this.place.geometry === null) {
          return;
        }

        for (const component of this.place.address_components) {
          const types = component.types;
          if (types.includes('street_number')) {
            this.addressForm.get('number')?.setValue(component.long_name);
          }
          if (types.includes('route')) {
            this.addressForm.get('street_address')?.setValue(component.long_name);
          }
          if (types.includes('postal_code')) {
            this.addressForm.get('zip_code')?.setValue(component.long_name);
          }
          if (types.includes('locality')) {
            this.addressForm.get('city')?.setValue(component.long_name);
          }
        }

        const newCenter = {
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        };
        this.mapCenter.set(newCenter);
        this.zoom.set(12);
      });
    });
  }
}
