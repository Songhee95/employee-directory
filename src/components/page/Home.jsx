import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../Table/Table';


function Home() {
    const [state, setState] = useState([]);

    useEffect(() =>{
        axios.get("https://randomuser.me/api/?results=100")
        .then(response =>{
            const data = response.data.results;
            setState([...data].map(data =>{
                return{
                    ...state,
                    name: data.name.title+"." +data.name.first+" "+data.name.last,
                    picture: data.picture.thumbnail,
                    cell: data.cell,
                    email: data.email,
                    dob: data.dob.data
                }
            }))
        })
        .catch(err =>{
            setState(err);
        })
    },[])

    return (
        <div>
            <Table valueToTable={state}/>
        </div>
    )
}

export default Home
