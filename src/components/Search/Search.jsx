import React, {useState} from 'react';
import './Search.css';
import Validation from './Validation';

function Search({user}) {
    const [option, setOption] = useState("");
    const [cellNum, setCellNum] = useState("");
    const [name, setName] = useState('')


    const handleInput = (e) =>{
        Validation(e, option, setName, user, setCellNum)
    }
    const selectOption = (e) =>{
        setOption(e.target.value);
    }


    return (
        <div className="search-container">
            <form className="search-form row g-3" >
                <div className="col-auto input">
                    <label htmlFor="search" className="search-box">
                        <select className="form-select" aria-label="Default select example" onChange={selectOption}>
                            <option defaultValue>Select Search Option</option>
                            <option value="1">Name</option>
                            <option value="2">Phone</option>
                        </select>
                    </label>
                    <input type="text" className="form-control" id="search" name='cellNum' value={option==='1' ? name : cellNum} onChange={handleInput}/>
                </div>
            </form>
        </div>
    )
}

export default Search
