'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { z } from 'zod';
import { DataTable } from '@/components/datatables/datatable'
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useMemo } from 'react';
import { getSkillColumns } from './columns';
import { Skill } from '@/schemas/skill';






const skillsDataArray: Skill[] = [
    {
        skill: 'Communication',
        status: 'Completed',
        currentRating: 5,
        lastSupervisorDate: '2024-04-01'
    },
    {
        skill: 'JavaScript',
        status: 'In Progress',
        currentRating: 4,
        lastSupervisorDate: undefined
    },
    {
        skill: 'Project Management',
        status: 'Not Started',
        currentRating: 3,
        lastSupervisorDate: undefined
    },
    {
        skill: 'React',
        status: 'On Hold',
        currentRating: 2,
        lastSupervisorDate: undefined
    },
    {
        skill: 'Python',
        status: 'Completed',
        currentRating: 5,
        lastSupervisorDate: '2024-04-10'
    },
    {
        skill: 'Machine Learning',
        status: 'Not Started',
        currentRating: 1,
        lastSupervisorDate: undefined
    }
];

const skillColumns = getSkillColumns();

// Validation can be done similarly as before for each object in the array if needed

// ...


export default function AuditSkillListing() {
    return (
        <Card>

            <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <CardHeader>

                    <div className="flex items-center justify-between space-y-2">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                            <p className="text-muted-foreground">
                                Here&apos;s a list of your tasks for this month!
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            {/* <UserNav /> */}
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="/avatars/03.png" alt="@shadcn" />
                                    <AvatarFallback>SC</AvatarFallback>
                                </Avatar>
                            </Button>
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    <DataTable data={skillsDataArray} columns={skillColumns} />
                </CardContent>
            </div>
        </Card>
    )
}