import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Table from '../Table/Table';
import Search from '../Search/Search'
import Header from '../Header/Header';

function Home() {
    const [state, setState] = useState([]);
    const [search , setSearch] = useState([]);

    useEffect(() =>{
        axios.get("https://randomuser.me/api/?nat=us&results=30")
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
    const userSearch = (user) =>{
        if(isNaN(user)) {
            let reRender = state.filter(man => man.name.toLowerCase().startsWith(user))
            setSearch(reRender)
        }else if(Number(user)){
            let reRender = state.filter(man => man.cell.startsWith("("+user))
            setSearch(reRender)
        }else{
            setSearch("")
        }
    }
    return (
        <div>
            <Header />
            <Search user={user => userSearch(user)}/>
            <Table valueToTable={search.length===0 ? state : search}/>
        </div>
    )
}

export default Home
