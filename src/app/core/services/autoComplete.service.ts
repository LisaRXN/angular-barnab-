import { Injectable, NgZone, inject, ElementRef } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class AutoCompleteService {
    
  private ngZone = inject(NgZone);
  private place!: google.maps.places.PlaceResult;

  getPlaceAutocomplete(
    input: ElementRef<HTMLInputElement>,
    onPlaceChanged: (place: google.maps.places.PlaceResult) => void
  ): void {
    if (typeof google === 'undefined' || !google.maps) {
      console.error('Google Maps API non chargé');
      return;
    }

    const autocomplete = new google.maps.places.Autocomplete(
      input.nativeElement,
      {
        componentRestrictions: { country: 'FR' },
        types: ['geocode'],
      }
    );

    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place = autocomplete.getPlace();
        if (!place.geometry) return;

        this.place = place;
        this.storePlaceData(place);
        onPlaceChanged(place);
      });
    });
  }

  getPlace(): google.maps.places.PlaceResult | null {
    if (
      !this.place &&
      typeof window !== 'undefined' &&
      typeof localStorage !== 'undefined'
    ) {
      const storedPlace = localStorage.getItem('place');
      if (storedPlace) {
        this.place = JSON.parse(storedPlace);
      }
    }
    return this.place;
  }

  storePlaceData(place: google.maps.places.PlaceResult): void {
    if (!place?.geometry?.location) return;

    const addressData: any = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      street_address: '',
      street_number: '',
      country: '',
    };
    if (place.address_components) {
      for (let component of place.address_components) {
        const types = component.types;

        if (types.includes('street_number')) {
          addressData.street_number = component.long_name;
        }
        if (types.includes('route')) {
          addressData.street_address = component.long_name;
        }
        if (types.includes('locality')) {
          addressData.city = component.long_name;
        }
        if (types.includes('postal_code')) {
          addressData.zip_code = component.long_name;
        }
        if (types.includes('country')) {
          addressData.country = component.long_name;
        }
      }
    }
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('place', JSON.stringify(place));
      localStorage.setItem('addressData', JSON.stringify(addressData));
    }
  }

  getStoredPlaceData(): any {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const addressData = localStorage.getItem('addressData');
      return addressData ? JSON.parse(addressData) : null;
    }
  }
}
