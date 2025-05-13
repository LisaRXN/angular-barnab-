import { Injectable, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormattedToolsDatas, AddressForm } from '../models/toolsDatas.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyToolsService {
  form: FormGroup;


  formattedToolsDatas!: FormattedToolsDatas
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      id:"",
      id_source:"",
      // step 1 : adresse
      addressForm: this.fb.group({
        street_address: new FormControl('', Validators.required),
        // street_number: new FormControl(null, [Validators.min(1)]),
        zip_code: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        country: new FormControl(''),
        latitude: new FormControl(''),
        longitude: new FormControl(''),
      }),
      contact: this.fb.group ({
        in_charge: new FormControl(""),
        specific_num: new FormControl(""),
        email: new FormControl(""),
      }),
      description: new FormControl(null),
      selling_price: new FormControl(null),
      transaction_type: new FormControl(null),
      rent_by_month: new FormControl(null),
      rental_expenses: new FormControl(null),
      on_site_valuation: new FormControl(false),
      heating_type: new FormControl(null),
      heating_format: new FormControl(null),
      coPro: new FormGroup({
        process: new FormControl("1"),
        process_details: new FormControl(null),
        lots: new FormControl(0),
      }),
      PROsettings: new FormGroup({
        fees: new FormControl(null),
        fees_price: new FormControl(null),
        exclusive_mandate: new FormControl(false),
      }),
      media: new FormGroup({
        images: new FormControl([""]),
        videoURL: new FormControl(""),
      }),
      DPE: new FormGroup({
        CE: new FormControl(null),
        EG: new FormControl(null),
        DPEdate: new FormControl("2024-11-15"),
        CEletter: new FormControl(null),
        EGletter: new FormControl(null),
        CEmin: new FormControl(null),
        CEmax: new FormControl(null),
      }),
      settings: new FormGroup({
        id_forfait: new FormControl("1"),
        option: new FormControl(null),
        id_order: new FormControl(""),
        id_order_state: new FormControl(null),
        end_date: new FormControl("2030-12-31"),
        options: new FormControl(null),
      }),
      
      // step 2 : estateType
      estateTypeForm: this.fb.group({
        property_type: new FormControl('apartment', Validators.required),
      }),
      // step 3 : characteristics
      characteristicsForm: this.fb.group({
        living_space: new FormControl(null, Validators.required),
        land_area: new FormControl(null, [Validators.required]),
        total_floor: new FormControl('1', Validators.required),
        floor: new FormControl(null),
        room: new FormControl('1', Validators.required),
        bedroom: new FormControl('1', Validators.required),
        construction_period: new FormControl('1981-1991', Validators.required),
        general_condition: new FormControl(
          'new_or_recently_renovated',
          Validators.required
        ),
      }),
      // step 4 : advantages
      advantagesForm: this.fb.group({
        has_elevator: new FormControl(false),
        has_balcony: new FormControl(false),
        has_terrace: new FormControl(false),
        has_cellar: new FormControl(false),
        has_parking: new FormControl(false),
        has_openedKitchen: new FormControl(false),
        has_equipped: new FormControl(false),
        has_storage: new FormControl(false),
        has_furnished: new FormControl(false),
        has_luminous: new FormControl(false),
        has_superIntendent: new FormControl(false),
        has_noOppositeView: new FormControl(false),
        has_crossing: new FormControl(false),
        has_exceptionalView: new FormControl(false),
        has_calm: new FormControl(false),
      }),
      // step 5 : identity
      identityForm: this.fb.group({
        reason: new FormControl("sell"),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        mail: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$')
        ]),
      }),
    });

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('estimation-form');
      if (saved) {
        this.form.patchValue(JSON.parse(saved));
        this.updateFormattedToolsDatas();
      }
    }
    this.form.valueChanges.subscribe((value) => {

      localStorage.setItem('estimation-form', JSON.stringify(value));
      this.updateFormattedToolsDatas();
    });
  }

  get estimationDatas() {
    return this.form.value;
  }

  updateFormattedToolsDatas() {
    this.formattedToolsDatas = {
      id: this.form.get('id')?.value,
      id_source: this.form.get('id')?.value,
      addressForm: this.form.get('addressForm')?.getRawValue(),
      settings: this.form.get('settings')?.getRawValue(),
      contact: this.form.get('contact')?.getRawValue(),
      description: this.form.get('description')?.value,
      selling_price: this.form.get('selling_price')?.value,
      transaction_type: this.form.get('transaction_type')?.value,
      rent_by_month: this.form.get('rent_by_month')?.value,
      rental_expenses: this.form.get('rental_expenses')?.value,
      on_site_valuation: this.form.get('on_site_valuation')?.value,
      heating_type: this.form.get('heating_type')?.value,
      heating_format: this.form.get('heating_format')?.value,
      coPro: this.form.get('coPro')?.getRawValue(),
      PROsettings: this.form.get('PROsettings')?.getRawValue(),
      DPE: this.form.get('DPE')?.getRawValue(),
      property_type: this.form.get('estateTypeForm')?.get('property_type')?.value,
      living_space: this.form.get('characteristicsForm')?.get('living_space')?.value,
      land_area: this.form.get('characteristicsForm')?.get('land_area')?.value,
      total_floor: this.form.get('characteristicsForm')?.get('total_floor')?.value,
      floor: this.form.get('characteristicsForm')?.get('floor')?.value,
      room: this.form.get('characteristicsForm')?.get('room')?.value,
      bedroom: this.form.get('characteristicsForm')?.get('bedroom')?.value,
      construction_period: this.form.get('characteristicsForm')?.get('construction_period')?.value,
      general_condition: this.form.get('characteristicsForm')?.get('general_condition')?.value,
      advantages: this.form.get('advantagesForm')?.getRawValue(),
      media: this.form.get('media')?.getRawValue(),
      reason: this.form.get('identityForm')?.get('reason')?.value,
      firstName: this.form.get('identityForm')?.get('firstName')?.value,
      lastName: this.form.get('identityForm')?.get('lastName')?.value,
      mail: this.form.get('identityForm')?.get('mail')?.value,
      phone: this.form.get('identityForm')?.get('phone')?.value,
  }
  }

  isFormValid() {
    const addressFormValid = this.form.get('addressForm')?.valid
    const estateTypeFormValid = this.form.get('estateTypeForm')?.valid
    const characteristicsFormValid = this.form.get('characteristicsForm')?.valid
    const identityFormValid = this.form.get('identityForm')?.valid  

    return Boolean(addressFormValid && estateTypeFormValid && characteristicsFormValid && identityFormValid)
}

  resetForm() {
    localStorage.removeItem('estimation-form');
    localStorage.removeItem('addressData');
    localStorage.removeItem('place');
    this.form.reset();
  }  
}

