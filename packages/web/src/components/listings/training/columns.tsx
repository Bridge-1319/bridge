import { ColumnDef } from "@tanstack/react-table";

// import { DataTableRowActions } from "@/components/datatable/data-table-row-actions";
import { UserTraining } from "@/schemas/training";
import { DataTableColumnHeader } from "@/components/datatables/data-table-column-header";
import { UserTrainingRowActions } from "./data-table-row-actions";


export const getTrainingColumns = (): ColumnDef<UserTraining>[] => [
    {
        accessorKey: 'priority',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Priority" />
        )
    },
    {
        accessorKey: 'training',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Training" />
        ),
        enableSorting: false,
        enableColumnFilter: false
    },
    {
        accessorKey: 'skill',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Skill" />
        ),
    },
    {
        accessorKey: 'target',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Target" />
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'updatedBy',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Updated By" />
        ),
    },
    {
        accessorKey: 'completionDate',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Completion Date" />
        ),
    },
    {
        id: 'actions',
        cell: ({ row }) => <UserTrainingRowActions row={row} />,
    }
]