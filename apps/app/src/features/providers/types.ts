export interface IProvider {
  id: string;
  name: string;
  owner_name: string;
  bank_username: any;
  bank_name: any;
  bank_account: any;
  iban: any;
  mobile: string;
  phone: any;
  address: string;
  location: Location;
  verified: any;
  branches: string;
  services: string;
  distance: number;
  rate: number;
  total_completed_orders: number;
  spare_part_brands: SparePartBrand[];
  is_delivery_available: boolean;
  is_video_call_available: boolean;
  is_voice_call_available: boolean;
  terms_and_conditions_accepted: boolean;
  only_my_city: any;
  part_condition: string;
  is_active: boolean;
  is_verified: boolean;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface SparePartBrand {
  id: string;
  name: any;
  logo: string;
}
