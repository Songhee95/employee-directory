import React, {useState} from 'react'
import './Table.css';
import TablePartial from './TablePartial.jsx';
import Sorting from './Sorting.jsx'

function Table({valueToTable}) {
    const [sortByName, setSortByName] = useState(false);
    const [sortByCell, setSortByCell] = useState(false);
    const displayTable = TablePartial(valueToTable);


    const clickedSort = (e)=>{
        if(e.target.id === '1'){
            console.log('name')
            setSortByName(!sortByName);
            setSortByCell(false)
        }else if(e.target.id === '2'){
            console.log('cell')
            setSortByCell(!sortByCell);
            setSortByName(false);
        }
    }

    const sort = () =>{
        const sortedArray = Sorting(valueToTable, sortByName, sortByCell);
        return TablePartial(sortedArray);
    }


    return (
        <>
        <div className='table-container table'>
            <table className='table-striped table-box'>
                <thead className='table-primary'>
                    <tr>
                        <th>Picture</th>
                        <th className='th-name'>Name<i className="fa fa-fw fa-sort" id="1" onClick={clickedSort}></i></th>
                        <th className='th-name'>Phone<i className="fa fa-fw fa-sort" id="2" onClick={clickedSort}></i></th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
            <tbody>
                {sortByCell ? sort(): displayTable}
            </tbody>
            </table>
        </div>
        </>
    )
}

export default Table
