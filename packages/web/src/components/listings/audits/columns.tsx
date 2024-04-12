import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/datatables/data-table-column-header";
import { DataTableRowActions } from "@/components/datatables/data-table-row-actions";
import { Skill } from "@/schemas/skill";


export const getSkillColumns = (): ColumnDef<Skill>[] => [
    {
        accessorKey: 'skill',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Skill" />
        ),
        enableSorting:false,
        enableColumnFilter:false
    },
    {
        accessorKey: 'currentRating',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Current Rating" />
        ),
        
    },
    {
        accessorKey: 'lastSupervisorDate',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Last Audit" />
        ),

    },
    {
        accessorKey: 'status',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Level" />
        ),
       
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} />,
    }
]