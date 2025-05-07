import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  NgZone,
  signal,
  ViewChild,
} from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';

import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PropertyToolsService } from '../../../../../core/services/property-tools.service';
import { FormErrorComponent } from '../../../../shared/components/form-error/form-error.component';
import { ToolsNavigationComponent } from '../tools-navigation/tools-navigation.component';
import { AutoCompleteService } from '../../../../../core/services/autoComplete.service';

@Component({
  selector: 'app-address',
  imports: [
    CommonModule,
    ProgressBarComponent,
    GoogleMapsModule,
    ReactiveFormsModule,
    FormsModule,
    FormErrorComponent,
    ToolsNavigationComponent,
  ],
  templateUrl: './address.component.html',
})
export class AddressComponent implements AfterViewInit {
  @ViewChild('addresstext') addresstext!: ElementRef<HTMLInputElement>;

  private ngZone = inject(NgZone);
  private router = inject(Router);
  private autoCompleteService = inject(AutoCompleteService);
  private propertyToolsService = inject(PropertyToolsService);

  place: any = null;
  addressData: any = null;
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

  ngOnInit() {
    const place = this.autoCompleteService.getPlace();
    if (place) {
      this.place = place;
    }
    this.addressData = this.autoCompleteService.getStoredPlaceData();
    if (this.addressData) {
      this.updateAdressForm();
      this.updateMapCenter()
    }

  }

  ngAfterViewInit() {

    if (this.place && this.place.formatted_address) {
      this.addresstext.nativeElement.value = this.place.formatted_address;
    } 
    this.autoCompleteService.getPlaceAutocomplete(
      this.addresstext,
      (place: any) => {
        this.place = place;
        this.addressData = this.autoCompleteService.getStoredPlaceData()
        this.updateAdressForm();
        this.updateMapCenter()
      }
    );
  }

  updateAdressForm(){
    this.addressForm.get('street_number')?.setValue(this.addressData.street_number)
    this.addressForm.get('street_address')?.setValue(this.addressData.street_address)
    this.addressForm.get('zip_code')?.setValue(this.addressData.zip_code)
    this.addressForm.get('city')?.setValue(this.addressData.city)
    this.addressForm.get('country')?.setValue(this.addressData.country)
    this.addressForm.get('latitude')?.setValue(this.addressData.lat)
    this.addressForm.get('longitude')?.setValue(this.addressData.lng)
  }

  updateMapCenter(){
    const newCenter = {
      lat: this.addressData.lat,
      lng: this.addressData.lng
    };
    this.mapCenter.set(newCenter);
  }
}
