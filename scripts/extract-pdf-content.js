const fs = require('fs');
const path = require('path');

async function extractPDFContent(pdfPath) {
  try {
    // pdf-parse is a function that can be called directly
    const pdfParse = require('pdf-parse');
    const dataBuffer = fs.readFileSync(pdfPath);
    
    // Try calling it directly
    const data = await pdfParse(dataBuffer);
    
    return {
      text: data.text,
      numPages: data.numpages,
      info: data.info
    };
  } catch (error) {
    // If that doesn't work, try as a constructor
    try {
      const PDFParse = require('pdf-parse');
      const dataBuffer = fs.readFileSync(pdfPath);
      const parser = new PDFParse.PDFParse(dataBuffer);
      const data = await parser.parse();
      
      return {
        text: data.text,
        numPages: data.numpages,
        info: data.info
      };
    } catch (error2) {
      console.error('Error extracting PDF:', error2.message);
      console.log('Trying alternative: pdftotext command...');
      
      // Try using system command
      const { execSync } = require('child_process');
      try {
        const text = execSync(`pdftotext "${pdfPath}" -`, { encoding: 'utf8' });
        return {
          text: text,
          numPages: 0,
          info: {}
        };
      } catch (cmdError) {
        console.error('pdftotext not available. Please install poppler-utils or provide content manually.');
        return null;
      }
    }
  }
}

// Main execution
const pdfPath = path.join(__dirname, '../Security-services.pdf');

if (fs.existsSync(pdfPath)) {
  extractPDFContent(pdfPath).then(result => {
    if (result) {
      console.log('PDF Content Extracted:');
      console.log('Number of pages:', result.numPages);
      console.log('\n--- Text Content (first 2000 chars) ---');
      console.log(result.text.substring(0, 2000));
      console.log('\n--- Full content saved to output.txt ---');
      
      // Save full text to file
      fs.writeFileSync(
        path.join(__dirname, '../pdf-content-output.txt'),
        result.text
      );
    }
  });
} else {
  console.log('PDF file not found at:', pdfPath);
  console.log('Looking for PDF in parent directory...');
  const altPath = path.join(__dirname, '../../Security-services.pdf');
  if (fs.existsSync(altPath)) {
    extractPDFContent(altPath).then(result => {
      if (result) {
        console.log('PDF Content Extracted:');
        console.log('Number of pages:', result.numPages);
        console.log('\n--- Text Content (first 2000 chars) ---');
        console.log(result.text.substring(0, 2000));
        fs.writeFileSync(
          path.join(__dirname, '../pdf-content-output.txt'),
          result.text
        );
      }
    });
  } else {
    console.log('PDF not found in alternative location either');
  }
}

