import React, {useState} from 'react';
import './Search.css'

function Search({user}) {
    const [option, setOption] = useState("");
    const [cellNum, setCellNum] = useState("");
    const [name, setName] = useState('')


    const handleInput = (e) =>{
        let str = e.target.value;
        if(option === "1"){
            str = str.replace(/\d+/g, "")
            setName(str)
            user(str)
        }else if(option ==='2'){
            str = str.replace(/^[a-zA-Z]+$/, "")
            setCellNum(str)
            user(str)
        }
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
