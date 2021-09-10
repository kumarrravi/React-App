import React from "react";
import '../styles/Restaurant.css'

function  Restaurant (props) {

    return <div className = "container">
        <img src = {props.image} alt = "restaurant"/>
            <h1>{props.name}</h1> 
            <p>{props.rating}</p>
            <p>{props.address}</p>
        
        
    </div>
}

export default Restaurant;