import React from "react"



export default function Chore({chore}){

    console.log(chore)

    return (
        <>
          <div className = "chores-container">
                <h3>{chore.name}</h3>
                <img src = {chore.imgUrl} alt = "" style =  {{height: "100px", width: "100px", border: "1px solid black"}}/>
            </div>
        </>
    )
}