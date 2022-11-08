import './style.css'
import axios from 'axios'
import React, {useState, useEffect} from 'react'


export function Main() {
    const [data, setData] = useState([])
    useEffect(() => {
const starData = () => {

    const getData = (response, require) => {
        axios.get("https://swapi.dev/api/planets/")
            .then(response => setData(response.data))
            .then(text => response.data)
            .catch(error => console.error(error))
      }  
    

    
        }
        
    }, [])

    return (
        <>
            <h1>aaa</h1>
       
        </>
    )
}
export default Main