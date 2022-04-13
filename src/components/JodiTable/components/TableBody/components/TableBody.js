import React from "react";
import {TableCell} from "./components"

export default function TableBody({jodi}) {
    let rows = Array.from(new Set(jodi.map(cell => cell.row))) // this gives us an array with our rows.
    let columns = Array.from(new Set(jodi.map(cell => cell.column))) // this gives us an array with our columns.


    return (
        <tbody id="table-body">
        {rows.map(row =>
            <tr key={row} id={`row-${row}`}>
                {columns.map(column =>
                    <TableCell row={row} column={column}/>
                )}
            </tr>
        )}
        </tbody>
    )
}