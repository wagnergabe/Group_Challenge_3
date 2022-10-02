import React, { useState} from "react";

const App = () => {
    const [user, setUsers] = useState([])


    const  ThingsToDo = () => {
        fetch("http://api.opentripmap.com/0.1/ru/places/xid/Q372040?apikey=5ae2e3f221c38a28845f05b6b28dd69575b483ead24be6a1f3db9410")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })

    }
        
}

export default App;