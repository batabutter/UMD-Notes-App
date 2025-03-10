import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "../data/lorem.pdf"
import './styles.css'

function PdfComp() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function advPage(pageNumber) {
    console.log(pageNumber)
    if (pageNumber + 1 < numPages + 1)
      setPageNumber(pageNumber + 1)
  }

  function bckPage() {
    console.log(pageNumber)
    if (pageNumber - 1 > 0)
      setPageNumber(pageNumber - 1)
  }

  return (
    <>
    <div className="pdf-div">
      <Document 
      file={pdf} 
      onLoadSuccess={onDocumentLoadSuccess} >

        <Page pageNumber={pageNumber} renderTextLayer={false}
          renderAnnotationLayer={false} width = {400}/>
      </Document>

      <p className = "pageCount"> Page {pageNumber} of {numPages}
      </p>
    </div>

    <div>
      <button 
        className = "skimButtonStyle"
        onClick={() => bckPage(pageNumber)}> 
        Back
      </button>
      <button 
        className = "skimButtonStyle"
        onClick={() => advPage(pageNumber)}> 
        Next 
      </button> 
    </div>
    </>
  );
}

export default PdfComp;