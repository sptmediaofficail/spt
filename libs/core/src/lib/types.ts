export type IPromotion = {
  id: string;
  image: string;
  title: string;
  title_ar: string;
  title_en: string;
  description: string;
  description_ar: string;
  description_en: string;
  price_before_discount: string;
  price_after_discount: string;
  deleted_at: any;
};

export type Order = {
  id: string;
  order_no: string;
  link_code: string;
  status: string;
  address: string;
  quantity: number;
  offers_count: number;
  type: string;
  price: number;
  tax: number;
  commission: number;
  fee: number;
  city: any;
  delivery_fee: number;
  total: number;
  provider: any;
  created_at: string;
  checkout_id: any;
};

export interface TopRated {
  spare_part_providers: Provider[];
  junkyard_sale_providers: Provider[];
}

export type Provider = {
  id: string;
  name: string;
  phone: string;
  avatar: any;
  fcm_token?: string;
  is_active: boolean;
  roles: string[];
  created_at: string;
  updated_at: string;
  rating_total: number;
  rating_count: number;
  rating: number;
  city_id: string;
  lang: string;
  email: any;
  has_push_notifications: boolean;
  has_sms_notifications: boolean;
  has_ability_to_visually_contact_with_client: boolean;
  has_ability_to_vocally_contact_with_client: boolean;
  deleted_at: any;
  permission_group_id: any;
  provider_id: string;
};

export interface IOffer {
  id: string;
  provider_id: string;
  provider_profile_id: string;
  provider_profile_name: string;
  status: string;
  price: number;
  delivery_fee: number;
  commission: number;
  fee: number;
  tax: number;
  total: number;
  is_new: number;
  name: string;
  rate: number;
  address: string;
  avatar: any;
  created_at: string;
}

export interface OrderDetails {
  id: string;
  order_no: string;
  link_code: string;
  vin_serial: any;
  status: string;
  address: string;
  type: string;
  price: number;
  tax: number;
  commission: number;
  fee: number;
  delivery_fee: number;
  total: number;
  is_reviewed: boolean;
  created_at: string;
  checkout_id: any;
  is_paid: boolean;
  details: Details;
  offers: IOffer[];
  images: string[];
  provider: any;
}

export interface Details {
  id: string;
  address: string;
  location: Location;
  year: string;
  brand: any;
  model: Model;
  name: string;
  quantity: number;
  condition_new: boolean;
  condition_used: boolean;
  condition_both: boolean;
  notes: string;
  is_delivery: boolean;
  delivery_date: string;
  agent_code: any;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Model {
  id: string;
  name: string;
}
