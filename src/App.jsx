import { useState } from 'react'
import './styles.css'
function App() {
  const [newItem, setItem] = useState("")

  return (
    <>
      <div>
        <h1>Creating a web-based application : </h1>
      </div>
      <button className = "btnStyle">CMSC 216</button>
      <div>
        <label className = "subCategory" >Lecture 1:</label>
      </div>
    </>
  )
}

export default App
