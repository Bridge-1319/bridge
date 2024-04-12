import { ColumnDef } from "@tanstack/react-table";

// import { DataTableRowActions } from "@/components/datatable/data-table-row-actions";
import { DataTableColumnHeader } from "@/components/datatables/data-table-column-header";
import { EvidenceRowActions } from "./data-table-row-actions";
import { Evidence } from "@/schemas/evidence";


export const getEvidenceColumns = (): ColumnDef<Evidence>[] => [
    {
        accessorKey: 'id',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Id" />
        )
    },
    {
        accessorKey: 'user',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="User" />
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
        accessorKey: 'type',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Type" />
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'Submission Date',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Submission Date" />
        ),
    },
    {
        id: 'actions',
        cell: ({ row }) => <EvidenceRowActions row={row} />,
    }
]