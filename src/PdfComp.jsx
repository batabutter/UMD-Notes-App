import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "../data/lorem.pdf"
import pdf2 from "../data/sample.pdf"
import './styles.css'

function PdfComp() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [filename, setPDF] = useState("../data/lorem.pdf");

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

  function changePDF(file) {
    setPDF(file);
  }

  return (
    <>
      <div className="pdfProperties">

        <div className="dropdown">
          <button>Lecture #</button>
          <div className="dropContent">
            <a href="#" onClick={() => changePDF("../data/lorem.pdf")}>Lecture 1</a>
            <a href="#" onClick={() => changePDF("../data/sample.pdf")}>Lecture 2</a>
          </div>
        </div>

        <div className="pdf-div">
          <Document
            file={filename}
            onLoadSuccess={onDocumentLoadSuccess} >

            <Page pageNumber={pageNumber} renderTextLayer={false}
              renderAnnotationLayer={false} width={400} />
          </Document>

          <p className="pageCount"> Page {pageNumber} of {numPages}
          </p>

          <div>
            <button
              className="skimButtonStyle"
              onClick={() => bckPage(pageNumber)}>
              Back
            </button>
            <button
              className="skimButtonStyle"
              onClick={() => advPage(pageNumber)}>
              Next
            </button>
          </div>

        </div>

      </div>

    </>
  );
}

export default PdfComp;