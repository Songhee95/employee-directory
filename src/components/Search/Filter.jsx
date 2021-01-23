function Filter(user, setSearch, state) {
    if(isNaN(user)) {
        let reRender = state.filter(man => man.name.toLowerCase().startsWith(user))
        return setSearch(reRender)
    }else if(Number(user)){
        let reRender = state.filter(man => man.cell.startsWith("("+user))
        return setSearch(reRender)
    }else{
        return setSearch("")
    }
}

export default Filter
