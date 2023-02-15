import React, {useState, useEffect} from "react"
import axios from "axios"
import Chore from "./Chore"


export default function Chores() {

//state to hold chores data
    const [choresData, setChoresData] = useState([])

//useEffect to fetch data on page load
    useEffect(()=> {
        axios.get("https://fragile-apron-cow.cyclic.app/chores")
            .then(res => setChoresData(res.data))
            .catch(err => console.log(err))
    }, [])

//iterating data to render chores
    const choresElements = choresData.map(chore => {
        return <Chore chore = {chore} />
    })

//testing data was received
    console.log("choresData: ", choresData)

    return (
        <>
            <div className = "projects-container">
                <h1>CHORES</h1>
                {choresElements}
            </div>
        </>
    )
}