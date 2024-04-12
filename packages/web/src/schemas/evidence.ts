import { z } from 'zod';

export const EvidenceType = z.object({
  id: z.number(),
  user: z.string(),
  skill: z.string(),
  type: z.enum(['training', 'general']),
  submissionDate: z.string().refine(value => !isNaN(Date.parse(value)), {
    message: "submissionDate must be a valid date string",
  }),
});

export type Evidence = z.infer<typeof EvidenceType>;