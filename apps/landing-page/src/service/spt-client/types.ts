export type Partner = {
  id: number;
  image: string;
  description: string | null;
};

export type Stats = {
  spare_part_orders: number;
  junkyard_sale_orders: number;
  clients: number;
  providers: number;
};

export interface BackendResponse<Data> {
  success: boolean;
  message: string;
  data: Data;
}

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
