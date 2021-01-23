import React, {useState, useEffect} from 'react'
import './Table.css';
import TablePartial from './TablePartial.jsx';
import Sorting from './Sorting.jsx'

function Table({valueToTable}) {
    const [sortByName, setSortByName] = useState(false);
    const [sortedArray, setSortedArray] = useState()

    const clickedSort = ()=>{
        setSortByName(!sortByName);
        setSortedArray(Sorting(sortedArray, sortByName));
    }

    useEffect(()=>{
        setSortedArray(valueToTable);
        // eslint-disable-next-line
    }, [valueToTable])

    return (
        <>
        <div className='table-container table'>
            <table className='table-striped table-box'>
                <thead className='table-primary'>
                    <tr>
                        <th>Picture</th>
                        <th className='th-name'>Name<i className="fa fa-fw fa-sort" onClick={clickedSort}></i></th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
            <tbody>
                {sortedArray && TablePartial(sortedArray)}
            </tbody>
            </table>
        </div>
        </>
    )
}

export default Table
