'use client'
import { DataTable } from "@/components/datatables/datatable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getTrainingColumns } from "./columns";
import { UserTraining } from "@/schemas/training";
import { useEffect, useState } from "react";
import { fetchUserTraining } from "@/lib/action";

const columns = getTrainingColumns();


export default function TrainingListing() {
    const [data, setData] = useState<UserTraining[]>([]);

    useEffect(() => {
        fetchUserTraining()
            .then(setData) // Assuming fetchUserTraining already handles the response.json()
            .catch(error => console.error('Error fetching training data:', error)); // Error handling
    }, []);

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
                        <DataTable data={data} columns={columns} />
                    </CardContent>
                </div>
            </Card>
        </>
    )
}