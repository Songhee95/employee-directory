import React from 'react'

function TablePartial(valueToTable) {
    return (valueToTable.map(user =>(
        <tr key={user.cell}>
            <td><img src={user.picture} alt="user"/></td>
            <td>{user.name}</td>
            <td>{user.cell}</td>
            <td>{user.email}</td>
            <td>{user.dob}</td>
        </tr>
    ))
    )
}

export default TablePartial
