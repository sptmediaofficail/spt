export type Partner = {
  id: number;
  image: string;
  description: string | null;
};

export type Stats = {
  spare_part_orders: number;
  junkyard_sale_orders: number;
  clients: number;
};

export interface BackendResponse<Data> {
  success: boolean;
  message: string;
  data: Data;
}

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
};

export type Offer = {
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

export type DownloadData = {
  id: string;
  image: string;
  title: string;
  title_ar: string;
  title_en: string;
  description: string;
  description_ar: string;
  description_en: string;
  google_play_link: string;
  apple_store_link: string;
  deleted_at: any;
};

export type HowOrderData = {
  id: string;
  link: string;
  title: string;
  title_ar: string;
  title_en: string;
  description: string;
  description_ar: string;
  description_en: string;
  section: string;
  deleted_at: any;
};

export type Right = {
  id: string;
  image: string;
  title: string;
  title_ar: string;
  title_en: string;
  description: string;
  description_ar: string;
  description_en: string;
  deleted_at: any;
};
