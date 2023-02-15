import React from "react"
import {Link} from "react-router-dom"


export default function Task({...task}){
    return (
        <>
            <div className ="task-card">
                <h3>Task: {task.title}</h3>
                <p>Location: {task.location}</p>
                <p>Complete: {task.isComplete}</p>
                <p>Priority: {task.priority}</p>
            </div>


        </>
    )
}