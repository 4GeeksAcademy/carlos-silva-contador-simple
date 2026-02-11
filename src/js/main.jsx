import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components

import SimpleCounter from "./components/SimpleCounter"

let counter = 0
setInterval(() => {

  counter++
  console.log(counter)
  ReactDOM.createRoot(document.getElementById('root')).render(
    <SimpleCounter
      numberOne={counter / 1}
      numberTwo={counter / 10}
       numberTree={counter / 100}
       numberFor={ counter / 1000}
        numberFive={ counter / 10000}
         numberSix={ counter / 100000}

    />
  )
}, 1000

)


