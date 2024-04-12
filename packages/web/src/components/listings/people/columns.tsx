import { ColumnDef } from "@tanstack/react-table";

import { DataTableRowActions } from "@/components/datatables/data-table-row-actions";
import { DataTableColumnHeader } from "@/components/datatables/data-table-column-header";
import { UserTrainingRowActions } from "./data-table-row-actions";
import { User } from "@/schemas/people";


export const getPeopleColumn = (): ColumnDef<User>[] => [
    {
        accessorKey: 'name',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        )
    },
    {
        accessorKey: 'location',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Location" />
        ),
        enableSorting: false,
        enableColumnFilter: false
    },
    {
        accessorKey: 'role',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Role" />
        ),
    },
    {
        accessorKey: 'securityGroup',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Target" />
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => <UserTrainingRowActions row={row} />,
    }
]