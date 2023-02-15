import React from "react"
import {Link} from "react-router-dom"


export default function Supply({...supply}){
    return (
        <>
            <Link to = {`/supplies/${supply._id}`} className = "supply-card-link" supply ={supply}>
                <div className = "supply-card">
                    <img src = {supply.imgUrl} className = "supply-img" alt = "barn"/>
                    <p className= "supply-item">{supply.item.toUpperCase()}</p>
                    {supply.urgent ? <h3 className = "supply-card-urgent-tag">URGENT</h3> : <></> }
                </div>
            </Link>
        </>
    )
}