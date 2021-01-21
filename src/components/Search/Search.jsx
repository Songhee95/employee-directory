import React, {useState} from 'react';
import './Search.css'

function Search() {
    const [cellNum, setCellNum] = useState("");

    const inputSearch = (e) =>{
        setCellNum(e.target.value)
    }

    return (
        <div className="search-container">
            <form className="search-form row g-3">
                <div className="col-auto input">
                    <label htmlFor="search" className="search-box">
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue>Select Search Option</option>
                            <option value="1">Name</option>
                            <option value="2">Cell</option>
                        </select>
                    </label>
                    <input type="text" className="form-control" id="search" name='cellNum' value={cellNum} onChange={inputSearch}/>
                </div>
                <div className="col-auto search-btn">
                    <button type="submit" className="btn btn-primary mb-3">SEARCH</button>
                </div>
            </form>
        </div>
    )
}

export default Search
