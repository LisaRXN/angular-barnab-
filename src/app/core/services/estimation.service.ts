import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EstimationService {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // step 1 : adresse
      addressForm: this.fb.group({
        number: new FormControl(null, Validators.required),
        street_address: new FormControl('', Validators.required),
        zip_code: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
        latitude: new FormControl('', Validators.required),
        longitude: new FormControl('', Validators.required),
      }),
      // step 2 : estateType
      estateTypeForm: this.fb.group({
        property_type: new FormControl('', Validators.required),
      }),
      // step 3 : characteristics
      characteristicsForm: this.fb.group({
        living_space: new FormControl(null, Validators.required),
        land_area: new FormControl(null, Validators.required),
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
        has_elevator: new FormControl(false, Validators.required),
        has_balcony: new FormControl(false, Validators.required),
        has_terrace: new FormControl(false, Validators.required),
        has_cellar: new FormControl(false, Validators.required),
        has_parking: new FormControl(false, Validators.required),
        has_superIntendent: new FormControl(false, Validators.required),
        has_luminous: new FormControl(false, Validators.required),
        has_noOppositeView: new FormControl(false, Validators.required),
        has_openedKitchen: new FormControl(false, Validators.required),
        has_storage: new FormControl(false, Validators.required),
        has_crossing: new FormControl(false, Validators.required),
        has_equipped: new FormControl(false, Validators.required),
        has_furnished: new FormControl(false, Validators.required),
        has_exceptionalView: new FormControl(false, Validators.required),
        has_calm: new FormControl(false, Validators.required),
      }),
      // step 5 : identity
      reason: new FormControl('sell', Validators.required),
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
      ]),
    });

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('estimation-form');
      if (saved) {
        this.form.patchValue(JSON.parse(saved));
      }
    }
    this.form.valueChanges.subscribe((value) => {
      localStorage.setItem('estimation-form', JSON.stringify(value));
    });
  }

  get estimationDatas() {
    return this.form.value;
  }

  resetForm() {
    localStorage.removeItem('estimation-form');
    this.form.reset();
  }
}
