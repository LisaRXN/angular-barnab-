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
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PropertyToolsService } from '../../../../../core/services/property-tools.service';
import { FormErrorComponent } from "../../../../shared/components/form-error/form-error.component";
import { ToolsNavigationComponent } from "../tools-navigation/tools-navigation.component";

@Component({
  selector: 'app-address',
  imports: [
    CommonModule,
    ProgressBarComponent,
    GoogleMapsModule,
    ReactiveFormsModule,
    FormsModule,
    FormErrorComponent,
    ToolsNavigationComponent
],
  templateUrl: './address.component.html',
})
export class AddressComponent implements AfterViewInit {
  @ViewChild('addresstext') addresstext!: ElementRef<HTMLInputElement>;

  private ngZone = inject(NgZone);
  private router = inject(Router)
  private propertyToolsService = inject(PropertyToolsService);

  place: any;
  mapCenter = signal({ lat: 48.8566, lng: 2.3522 }); // Paris par défaut
  zoom = signal(12);
  mapOptions: any = {
    mapType: 'satellite',
    heading: 90,
    tilt: 45,
  };

  get addressForm() {
    return this.propertyToolsService.form.get('addressForm') as FormGroup;
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
        
        this.addressForm.get('longitude')?.setValue(this.place.geometry.location.lng());
        this.addressForm.get('latitude')?.setValue(this.place.geometry.location.lat());

        for (const component of this.place.address_components) {
          const types = component.types;
          if (types.includes('street_number')) {
            this.addressForm.get('street_number')?.setValue(component.long_name);
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
          if (types.includes('country')) {
            this.addressForm.get('country')?.setValue(component.long_name);
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
