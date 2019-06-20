import React from "react"

const Table = ({ data }) => (
    <tbody>
        {data.map(row => (
            <tr key={row.number}>
                <td>{row.number}</td>
                <td>{row.releaseDate}</td>
                <td>{row.title}</td>
                <td>{row.productionBudget}</td>
                <td>{row.worldwideBoxOffice}</td>
            </tr>
        ))}
    </tbody>
)

export default Table
