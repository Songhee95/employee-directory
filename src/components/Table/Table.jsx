import React, {useState, useEffect} from 'react'
import './Table.css';

function Table({valueToTable}) {
    const tableMap = valueToTable.map(user =>(
                <tr>
                    <td><img src={user.picture} alt="user"/></td>
                    <td>{user.name}</td>
                    <td>{user.cell}</td>
                    <td>{user.email}</td>
                    <td>{user.dob}</td>
                </tr>
    ))
    return (
        <>
        <table>
            <thead>
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
        </>
    )
}

export default Table
