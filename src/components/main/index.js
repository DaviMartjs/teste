import './style.css'
import axios from 'axios'
import React, {useState, useEffect} from 'react'

export function Main() {
    const [data, setData] = useState()
   
useEffect(() => {
        starData(console.log(data)) 
    }, [])
   
    const starData = async () => {
        await axios.get("https://swapi.dev/api/films/")
            .then(response => setData(response.data))
            .then()
        .catch(error => console.error(error))
    } 

 
    return (
        <div>
        </div>
    )
}
export default Main