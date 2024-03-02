import z from 'zod';

export interface DatabaseCredentials {
  url: string;
  authToken?: string;
}

export const dbCredentialsSchema = z.object({
  url: z.string().min(1),
  authToken: z.string().min(1).optional(),
});
