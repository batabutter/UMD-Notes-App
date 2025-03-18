import { useState } from 'react'
import './styles.css'
import { pdfjs } from 'react-pdf';
import PdfComp from './PdfComp';
import { LectureDisplay } from './LectureDisplay';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  const [newItem, setItem] = useState("")

  return (
    <>
      <div className="container">
        
        <div className="dropdown">
          <button>Lecture #</button>
          <div className="dropContent">
            <a href="">Lecture 1</a>
            <a href="">Lecture 2</a>
          </div>
        </div>

        <div>
          <h1 className="title">Collection of UMD Notes : </h1>

          <div>
            <div className="btnFormat">
              <button className="btnStyle">CMSC 216</button>
              <button className="btnStyle">CMSC 250</button>
              <button className="btnStyle">MATH 241</button>
            </div>
          </div>

          <PdfComp />
        </div>

      </div>

    </>
  )
}

export default App
