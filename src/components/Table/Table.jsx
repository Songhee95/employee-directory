import React from 'react'
import './Table.css';

function Table({valueToTable}) {
    const tableMap = valueToTable.map(user =>(
                <tr key={user.cell}>
                    <td><img src={user.picture} alt="user"/></td>
                    <td>{user.name}</td>
                    <td>{user.cell}</td>
                    <td>{user.email}</td>
                    <td>{user.dob}</td>
                </tr>
    ))
    return (
        <>
        <div className='table-container table'>
            <table className='table-striped table-box'>
                <thead className='table-primary'>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Cell</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
            <tbody>
                {tableMap}
            </tbody>
            </table>
        </div>
        </>
    )
}

export default Table
