import { z } from 'zod';

export enum SecurityGroup {
  Admin = 'Admin',
  Supervisor = 'Supervisor',
  General = 'General',
}

export const UserSchema = z.object({
  name: z.string(),
  location: z.string(),
  role: z.string(),
  securityGroup: z.nativeEnum(SecurityGroup),
});

export type User = z.infer<typeof UserSchema>;