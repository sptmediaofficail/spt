import { z, ZodTypeAny } from 'zod';
import { IUser } from '../entities/IUser';

export const UserSchema = z.object<{ [K in keyof IUser]: ZodTypeAny }>({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  avatar: z.string(),
  fcm_token: z.string(),
  is_active: z.boolean(),
  roles: z.array(z.string()),
  created_at: z.string(),
  updated_at: z.string(),
  rating_total: z.number(),
  rating_count: z.number(),
  rating: z.number(),
  city_id: z.string(),
  lang: z.string(),
  email: z.string().nullable(),
  has_push_notifications: z.boolean(),
  has_sms_notifications: z.boolean(),
  has_ability_to_visually_contact_with_client: z.boolean(),
  has_ability_to_vocally_contact_with_client: z.boolean(),
  deleted_at: z.string().nullable(),
  permission_group_id: z.any(),
});
