import React, {useState, useEffect} from "react"
import axios from "axios"

export default function Tasks() {

    //state to hold chores data
const [tasksData, setTasksData] = useState([])

//useEffect to fetch data on page load
    useEffect(()=> {
        axios.get("https://fragile-apron-cow.cyclic.app/tasks")
            .then(res => setTasksData(res.data))
            .catch(err => console.log(err))
    }, [])

//testing data was received
    console.log("tasksData: ", tasksData)
    return (
        <>
            Tasks Page
        </>
    )
}