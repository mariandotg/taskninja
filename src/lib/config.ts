import z from 'zod';
import * as dotenv from 'dotenv';
dotenv.config();

const { NODE_ENV } = process.env;

export const ENVIRONMENT = NODE_ENV;

const envSchema = z.object({
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
});

const env = envSchema.parse(process.env);

export const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = env;
