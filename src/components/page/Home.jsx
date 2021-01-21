import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Table from '../Table/Table';
import Search from '../Search/Search'

function Home() {
    const [state, setState] = useState([]);
    const [userName, setUserName] = useState("");

    useEffect(() =>{
        axios.get("https://randomuser.me/api/?results=30")
        .then(response =>{
            const data = response.data.results;
            setState([...data].map(data =>{
                return{
                    ...state,
                    name: data.name.first+" "+data.name.last,
                    picture: data.picture.medium,
                    cell: data.cell,
                    email: data.email,
                    dob: data.dob.date
                }
            }))
        })
        .catch(err =>{
            setState(err);
        })
        // eslint-disable-next-line
    },[])

    return (
        <div>
            <Search user={name=> setUserName(name)} />
            <Table valueToTable={state}/>
        </div>
    )
}

export default Home
