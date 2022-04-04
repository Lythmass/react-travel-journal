import React from "react"

export default function App(props) {
     return(
          <div className = "card">
               <img src = {props.image} />
               <div className = "details">
                    <div className = "titles">
                         <i class="location fa-solid fa-location-dot"></i>
                         <h3>{props.country} <span><a href = {props.map} target = "_blank">View on Google Maps</a></span></h3>
                         <h1>{props.place}</h1>
                    </div>
                    <div className = "description">
                         <h4>{props.date}</h4>
                         <p>{props.description}</p>
                    </div>
               </div>
          </div>
     )
}
