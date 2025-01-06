import { PostClientOrderSparePartData } from '@spt/api-sdk';
import { CalendarDateTime } from '@internationalized/date';

export type PartData = {
  partName: string;
  quantity: number;
  status: string[];
  notes?: string;
};

type RemoveNumberIndexed<T> = {
  [K in keyof T as K extends `${infer Prefix}[${number}]${infer Suffix}`
    ? never
    : K]: T[K];
};

export type FormOrderParts = RemoveNumberIndexed<
  PostClientOrderSparePartData['formData']
> & {
  parts: PartData[];
  calender_delivery_date: CalendarDateTime;
  is_agent: number;
  only_my_city: number;
};
