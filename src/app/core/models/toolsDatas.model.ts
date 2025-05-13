export interface AddressForm {
  street_address: string;
  street_number: number | null;
  zip_code: string;
  city: string;
  country: string;
  latitude: string;
  longitude: string;
}

export interface CoPro {
  process: boolean;
  process_details: string | null;
  lots: number | null;
}
export interface Contact {
  in_charge: string;
  specific_num: string;
  email: string;
}

export interface PROSettings {
  fees: string | null;
  fees_price: number | null;
  exclusive_mandate: boolean;
}

export interface DPE {
  CE: number | null;
  EG: number | null;
  DPEdate: string | null;
  CEletter: string | null;
  EGletter: string | null;
  CEmin: number | null;
  CEmax: number | null;
}

export interface EstateTypeForm {
  property_type: string;
}

export interface CharacteristicsForm {
  living_space: number;
  land_area: number;
  total_floor: string;
  floor: number | null;
  room: string;
  bedroom: string;
  construction_period: string;
  general_condition: string;
}

export interface AdvantagesForm {
  has_elevator: boolean;
  has_balcony: boolean;
  has_terrace: boolean;
  has_cellar: boolean;
  has_parking: boolean;
  has_openedKitchen: boolean;
  has_equipped: boolean;
  has_storage: boolean;
  has_furnished: boolean;
  has_luminous: boolean;
  has_superIntendent: boolean;
  has_noOppositeView: boolean;
  has_crossing: boolean;
  has_exceptionalView: boolean;
  has_calm: boolean;
}

export interface IdentityForm {
  reason: string;
  firstName: string;
  lastName: string;
  mail: string;
  phone: string;
}
export interface Media {
  images: string[];
  videoURL: string;
}

export interface Settings {
  id_forfait: string;
  option: any | null;
  id_order: string;
  id_order_state: string;
  end_date: string;
  options: any | null;
};

export interface FormattedToolsDatas {
  id: string,
  id_source: string;
  addressForm: AddressForm;
  contact: Contact;
  description: string | null;
  selling_price: number | null;
  transaction_type: string | null;
  rent_by_month: number | null;
  rental_expenses: number | null;
  on_site_valuation: boolean;
  heating_type: string | null;
  heating_format: string | null;
  coPro: CoPro;
  PROsettings: PROSettings;
  DPE: DPE;
  property_type: string;
  living_space: number;
  land_area: number;
  total_floor: number;
  floor: number;
  room: number;
  bedroom: number;
  construction_period: string;
  general_condition: string;
  advantages: AdvantagesForm;
  settings: Settings;
  media: Media;
  reason: string;
  firstName: string;
  lastName: string;
  mail: string;
  phone: string;
}
