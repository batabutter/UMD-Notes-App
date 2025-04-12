import { useState } from 'react'
import './styles.css'
import { pdfjs } from 'react-pdf';
import PdfComp from './PdfComp';
import ParticlesComponent from './assets/Particles';
import { ClassDisplay }  from './ClassDisplay';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  const [newItem, setItem] = useState("")
  const names = ["CMSC 216", "CMSC 250", "MATH 241"]

  return (
    <>
  {
    /*
    TODO: Move PDFComp into class display, add ClassData Component, use it to
    store the name, number of lectures, and names of the pdfs corresponding to 
    the lectures.
    */
  }
      <div className="container">
      <ParticlesComponent id = "particles"/>
        <div>
          <h1 className="title">Collection of UMD Notes : </h1>

          <ClassDisplay 
          names = {names}/>

        </div>
        <PdfComp 
        names = {names}/>
      </div>

    </>
  )
}

export default App
