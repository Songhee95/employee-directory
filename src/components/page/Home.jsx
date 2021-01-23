import React, { useState, useEffect} from 'react';
import API from "../API/API"
import Table from '../Table/Table';
import Search from '../Search/Search'
import Header from '../Header/Header';
import Filter from '../Search/Filter';

function Home() {
    const [state, setState] = useState([]);
    const [search , setSearch] = useState([]);

    useEffect(() =>{
        API()
        .then(response =>{
            const data = response.data.results;
            setState([...data].map(data =>{
                return{
                    ...state,
                    name: data.name.first+" "+data.name.last,
                    picture: data.picture.medium,
                    cell: data.cell,
                    email: data.email,
                    dob: data.dob.date.slice(0,10)
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
            <Header />
            <Search user={user => Filter(user, setSearch, state)}/>
            <Table valueToTable={search.length===0 ? state : search}/>
        </div>
    )
}

export default Home
