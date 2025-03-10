import { useState } from 'react'
import './styles.css'
import { pdfjs } from 'react-pdf';
import PdfComp from './PdfComp';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  const [newItem, setItem] = useState("")

  return (
    <>
      <div>
        <h1>Creating a web-based application : </h1>
      </div>

      <div>
        <button className = "btnStyle">CMSC 216</button>
        <label className = "subCategory" >Lecture 1:</label>
        <PdfComp />
      </div>
    </>
  )
}

export default App
