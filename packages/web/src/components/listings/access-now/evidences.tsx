'use client'
import { DataTable } from "@/components/datatables/datatable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getEvidenceColumns } from "./columns";
import { UserTraining } from "@/schemas/training";
import { useEffect, useState } from "react";
import { fetchUserTraining } from "@/lib/action";
import { Evidence } from "@/schemas/evidence";

const columns = getEvidenceColumns();





const sampleData: Evidence[] = [
  {
    id: 1,
    user: 'JohnDoe',
    skill: 'Leadership',
    type: 'training',
    submissionDate: '2022-01-01'
  },
  {
    id: 2,
    user: 'JaneDoe',
    skill: 'Communication',
    type: 'general',
    submissionDate: '2022-02-02'
  },
  {
    id: 3,
    user: 'MikeSmith',
    skill: 'Project Management',
    type: 'training',
    submissionDate: '2022-03-03'
  },
  {
    id: 4,
    user: 'EmilyJones',
    skill: 'Technical Writing',
    type: 'general',
    submissionDate: '2022-04-04'
  }
];

export default function EvidenceListing() {


  return (
    <>
      <Card>
        <div className=" h-full flex-1 flex-col space-y-4 p-4 md:flex">
          <CardHeader>
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Trainings</h2>
                <p className="text-muted-foreground">
                  Improve your skills with our trainings.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <DataTable data={sampleData} columns={columns} />
          </CardContent>
        </div>
      </Card>
    </>
  )
}