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
