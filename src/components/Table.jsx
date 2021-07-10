import React from 'react'

const Table = ({colunms}) => {
    console.log(colunms)
    return (
        <div className="table-container">
            <table>

<thead>
    <tr>
        {
            colunms.map(col =>{
                return <th>{col}</th>
            })
        }
    </tr>
</thead>

<tbody>
    <tr className="table-row">
        <td>August 17, 2021</td>
        <td>https://twitter.com/search?q=%22Elon%20</td>
        <td><span className="success">Accepted</span></td>
    </tr>
    <tr className="table-row">
        <td>August 17, 2021</td>
        <td>https://twitter.com/search?q=%22Elon%20</td>
        <td > <span className="pending">Pending</span></td>
    </tr>
</tbody>
</table>
        </div>
    )
}

export default Table
