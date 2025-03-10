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
      <title>UMD Notes App</title>

      <h1 className = "title">Collection of UMD Notes : </h1>

      <div>
        <button className = "btnStyle">CMSC 216</button>
        <label className = "subCategory" >Lecture 1:</label>
        <PdfComp />
      </div>
    </>
  )
}

export default App
