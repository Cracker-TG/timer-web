import { Icon } from "@iconify/react"
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { useReducer, useState } from "react"
import styled from "styled-components"

const StyledButton = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    &:hover {
        background-color: transparent;
    }           
`

type Person = {
    name: string
    lastName: string
    age: number
    projectTotal: number
    status: string
    progress: number
}

const defaultData: Person[] = [
    {
        name: 'tanner',
        lastName: 'linsley',
        age: 24,
        projectTotal: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        name: 'tandy',
        lastName: 'miller',
        age: 40,
        projectTotal: 40,
        status: 'Single',
        progress: 80,
    },
    {
        name: 'joe',
        lastName: 'dirte',
        age: 45,
        projectTotal: 20,
        status: 'Complicated',
        progress: 10,
    },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
    columnHelper.display({
        id: 'No.',
        header: 'No.',
        cell: info => info.row.index + 1, // เริ่มที่ 1 แทน 0
    }),
    columnHelper.accessor('name', {
        header: () => 'Client Name',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('projectTotal', {
        header: 'Project Total',
    }),
    columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: info => (
            <div className="flex gap-2">
                <StyledButton
                    onClick={() => { }}
                    className="text-blue-500"
                >
                    <Icon icon="@custom:custome-icon:eye" />
                </StyledButton>
                <StyledButton
                    onClick={() => { }}
                    className="text-blue-500"
                >
                    <Icon icon="@custom:custome-icon:edit-duotone-line" />
                </StyledButton>
                <StyledButton
                    onClick={() => { }}
                    className="text-red-500"
                >
                    <Icon icon="@custom:custome-icon:trash" />
                </StyledButton>
            </div>
        ),
    }),

]

function ClientPage() {
    const [data, _setData] = useState(() => [...defaultData])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div>
            <span style={{ fontSize: 30 }}>Client</span>
            <hr />
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default ClientPage