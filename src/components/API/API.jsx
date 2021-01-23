import axios from "axios";
// Export an object containing methods we'll use for accessing the Wikipedia API

function API() {
    return (
        axios.get(
            "https://randomuser.me/api/?nat=us&results=30"
        )
    )
}

export default API
