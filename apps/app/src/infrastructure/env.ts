import { z } from 'zod';

export const env = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
};

const schema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
});

export const envSchema = schema.parse(env);
