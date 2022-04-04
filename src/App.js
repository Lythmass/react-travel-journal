import React from "react"

import Header from "./Components/Header.js"
import Card from "./Components/Card.js"
import Data from "./Data.js"

export default function App() {
     const dataMapped = Data.map(data => {
          return (
               <Card {...data} />
          )
     });
     return (
          <div>
               <Header/>
               {dataMapped}
          </div>

     )
}
