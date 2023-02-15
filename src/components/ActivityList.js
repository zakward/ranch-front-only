import React, {useState} from "react"
import {Link} from "react-router-dom"
import Barn from "../images/icons8-farm-64.png"
import Tractor from "../images/icons8-tractor-64.png"
import WheelBarrow from "../images/icons8-wheelbarrow-60.png"
import Chores from "./Chores"
import Supplies from "./Supplies"
import Tasks from "./Tasks"


export default function ActivityList() {



    return (
        <>
            <div id = "activity-container">
                <Link to = "/chores" className = "link">
                <div className = "activity">
                    <img src = {Barn }alt = "" className = "activity-img" />
                    <h3 className = "activity-name">CHORES</h3>
                </div> </Link>
               <Link to ="/tasks" className = "link"> <div className = "activity">
                    <img src = {Tractor }alt = "" className = "activity-img" />
                    <h3 className = "activity-name">TASKS</h3>
                </div></Link>
                <Link to = "/supplies" className = "link"><div className = "activity">
                    <img src = {WheelBarrow}alt = "" className = "activity-img" />
                    <h3 className = "activity-name">SUPPLIES</h3>
                </div></Link>

            </div>
        </>
    )
}