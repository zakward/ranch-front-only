import React, {useState, useEffect} from "react"
import axios from "axios"

export default function Supplies(){

//state to hold supplies data
const [suppliesData, setSuppliesData] = useState([])

//useEffect to fetch data on page load
    useEffect(()=> {
        axios.get("https://fragile-apron-cow.cyclic.app/supplies")
            .then(res => setSuppliesData(res.data))
            .catch(err => console.log(err))
    }, [])

//testing data was received
    console.log("suppliesData: ", suppliesData)




    return (
        <>
        
            <p>Supplies Page</p>
            
        </>
    )
}