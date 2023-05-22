import React, { useState } from 'react';
import Clipboard from 'react-clipboard.js';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function Tools(props) {
  const [tab, switchTab] = useState('summary');
  const printRef = React.useRef();

  // code from https://www.robinwieruch.de/react-component-to-pdf/
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png'); // convert item to image

    // eslint-disable-next-line new-cap
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  };

  // clipboard info from https://clipboardjs.com/ and https://www.npmjs.com/package/react-clipboard.js?activeTab=readme
  function tabs() {
    if (tab === 'summary') {
      return (
        <div>
          <div ref={printRef} id="summary">
            This is the summary
          </div>
          <Clipboard data-clipboard-target="#summary" onSuccess={() => { console.log('success'); }}>
            copy to clipboard
          </Clipboard>
          <button type="button" onClick={handleDownloadPdf}>Download as PDF</button>
        </div>

      );
    } else {
      return (
        <div>
          The toned down tab
        </div>
      );
    }
  }

  return (
    <div>
      <button type="button" onClick={() => { switchTab('summary'); }}>Summary</button>
      <button type="button" onClick={() => { switchTab('tone'); }}>Tone</button>
      {tabs()}
    </div>
  );
}

export default Tools;
