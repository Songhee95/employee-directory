import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Table from '../Table/Table';
import Search from '../Search/Search'

function Home() {
    const [state, setState] = useState([]);
    const [search , setSearch] = useState([]);

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
    const userSearch = (user) =>{
        if(isNaN(user)) {
            let re = state.filter(he => he.name.toLowerCase().startsWith(user))
            setState(re)
        }else if(Number(user)){
            console.log("this is cell search")
        }
    }
    return (
        <div>
            <Search user={user => userSearch(user)}/>
            <Table valueToTable={state}/>
        </div>
    )
}

export default Home
