import { z } from 'zod';

const UserTrainingType = z.object({
    priority: z.string()
        .refine(value => ['High', 'Medium', 'Low'].includes(value), {
            message: 'Invalid priority',
        }),
    training: z.string(),
    skill: z.string(),
    target: z.number(),
    updatedBy: z.string(),
    completionDate: z.string().optional().refine(value => {
        if (!value) return true; // Optional, so it's valid if it's not provided
        return !isNaN(Date.parse(value)); // Check if the date is valid
    }, {
        message: 'Invalid date format, expected YYYY-MM-DD',
    })
});

export type UserTraining = z.infer<typeof UserTrainingType>;