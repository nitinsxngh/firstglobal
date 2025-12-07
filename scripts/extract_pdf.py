#!/usr/bin/env python3
"""
PDF Content Extraction Script
Extracts text and identifies images from Security-services.pdf
"""

import sys
import json
import os

try:
    import PyPDF2
    HAS_PYPDF2 = True
except ImportError:
    HAS_PYPDF2 = False
    print("PyPDF2 not installed. Install with: pip3 install PyPDF2")

try:
    from pdf2image import convert_from_path
    HAS_PDF2IMAGE = True
except ImportError:
    HAS_PDF2IMAGE = False
    print("pdf2image not installed. Install with: pip3 install pdf2image")

def extract_text_pypdf2(pdf_path):
    """Extract text using PyPDF2"""
    text_content = []
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            num_pages = len(pdf_reader.pages)
            
            print(f"PDF has {num_pages} pages")
            
            for page_num, page in enumerate(pdf_reader.pages):
                text = page.extract_text()
                text_content.append({
                    'page': page_num + 1,
                    'text': text
                })
                print(f"Extracted text from page {page_num + 1}")
        
        return text_content
    except Exception as e:
        print(f"Error extracting text: {e}")
        return None

def extract_pdf(pdf_name):
    pdf_path = pdf_name
    
    if not os.path.exists(pdf_path):
        print(f"PDF file not found: {pdf_path}")
        return None
    
    print(f"Extracting content from: {pdf_path}")
    
    if HAS_PYPDF2:
        text_content = extract_text_pypdf2(pdf_path)
        if text_content:
            # Save to file
            output_file = pdf_name.replace('.pdf', '-extracted-text.json')
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(text_content, f, indent=2, ensure_ascii=False)
            
            print(f"\nExtracted text saved to: {output_file}")
            print("\n--- First page preview ---")
            if text_content:
                print(text_content[0]['text'][:1000])
            return text_content
    else:
        print("Please install PyPDF2: pip3 install PyPDF2")
        return None

def main():
    pdfs = [
        "facility-management.pdf",
        "Information-Security.pdf",
        "Skills-and-training.pdf"
    ]
    
    for pdf in pdfs:
        print(f"\n{'='*60}")
        print(f"Processing: {pdf}")
        print('='*60)
        extract_pdf(pdf)
        print()

if __name__ == "__main__":
    main()

