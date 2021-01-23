function Validation(e, option, setName, user, setCellNum) {
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

export default Validation
