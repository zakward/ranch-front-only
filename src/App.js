import React, {useState, useEffect} from "react"
import axios from "axios"
import {Routes, Route, Link} from "react-router-dom"
import Supplies from "./components/Supplies"
import Tasks from "./components/Tasks";
import Chores from "./components/Chores"
import ActivityList from "./components/ActivityList";

function App() {

const [supplies, setSupplies] = useState([])

useEffect(()=> {
    axios.get("https://fragile-apron-cow.cyclic.app/tasks")
      .then(res => setSupplies(res.data))
      .catch(err => console.log(err))
}, [])

console.log(supplies)

  return (
    <>
      <div id = "navbar">
        <h3 className="header">Ward Family Ranch App</h3>
      </div>
        
        <Routes>
          <Route index path = "/" element = {<ActivityList />} />
          <Route path = "/supplies" element = {<Supplies />}/>
          <Route path = "/tasks" element = {<Tasks />} />
          <Route path = "/chores" element = {<Chores />} />
        </Routes>
    </>
  )
}

export default App;
