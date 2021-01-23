function Sorting(valueToTable, sortByName) {
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
    }else if(!sortByName){
        return(
            valueToTable.sort(function(a,b){
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if(nameA<nameB){
                    return 1;
                } 
                if(nameA>nameB){
                    return -1;
                }
                return 0;
            })
        )
    }

}

export default Sorting
