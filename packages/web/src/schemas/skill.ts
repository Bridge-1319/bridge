import { z } from 'zod';
const SkillType = z.object({
    skill: z.string(),
    status: z.enum(['Not Started', 'In Progress', 'Completed', 'On Hold']),
    currentRating: z.number(),
    lastSupervisorDate: z.string().optional().refine(value => {
        if (!value) return true; // Optional, so it's valid if it's not provided
        return !isNaN(Date.parse(value)); // Check if the date is valid
    }, {
        message: 'Invalid date format, expected YYYY-MM-DD',
    })
});

export type Skill = z.infer<typeof SkillType>;