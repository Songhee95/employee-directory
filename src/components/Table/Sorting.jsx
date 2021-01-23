function Sorting(valueToTable, sortByName, sortByCell) {
    if(sortByName){
        return (
            valueToTable.sort(function(a,b){
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if(nameA<nameB){
                    return -1;
                } 
                if(nameA>nameB){
                    return 1;
                }
                return 0;
            })
        )
    }else if(sortByCell){
        return(
            valueToTable.sort(function(a,b){
                return a.cell - b.cell;
            })
        )
    }

}

export default Sorting
