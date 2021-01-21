import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../Table/Table';


function Home() {
    const [state, setState] = useState([]);

    useEffect(() =>{
        axios.get("https://randomuser.me/api/?results=100")
        .then(response =>{
            const array = [];
            response.data.results.map(user=>(
                array.push({
                    name: user.name.title +"." + user.name.first+" " + user.name.last,
                    picture: user.picture.thumbnail,
                    cell: user.cell,
                    email: user.email,
                    dob: user.dob.date,
                })
            ))
            console.log(array);
            setState(array)
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
