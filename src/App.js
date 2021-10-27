import React from 'react'
import FetchUsers from './FetchUsers'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <>
      <h1 className="text-center ">
        Random User Application
      </h1>
      <br/>
      <FetchUsers />
    </>
  )
}

export default App
