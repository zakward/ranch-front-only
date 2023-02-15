import React, {useState, useEffect} from "react"
import axios from "axios"
import Task from "./Task"

export default function Tasks() {

    //state to hold chores data
const [tasksData, setTasksData] = useState([])

//useEffect to fetch data on page load
    useEffect(()=> {
        axios.get("https://fragile-apron-cow.cyclic.app/tasks")
            .then(res => setTasksData(res.data))
            .catch(err => console.log(err))
    }, [])

    //iterating data to render tasks
const taskElements = tasksData.map(task => {
    return (
        <Task {...task} />
    )
})

//testing data was received
    console.log("tasksData: ", tasksData)
    return (
        <>
        <div className="task-container">
            <h1>Tasks</h1>
            {taskElements}
        </div>
        </>
    )
}