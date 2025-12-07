#!/usr/bin/env python3
"""
PDF Image Extraction Script
Extracts images from PDFs and saves them with service-specific names
"""

import sys
import os
import json
from pathlib import Path

try:
    import fitz  # PyMuPDF
    HAS_PYMUPDF = True
except ImportError:
    HAS_PYMUPDF = False
    print("PyMuPDF not installed. Install with: pip3 install pymupdf")

try:
    from pdf2image import convert_from_path
    HAS_PDF2IMAGE = True
except ImportError:
    HAS_PDF2IMAGE = False

try:
    import PyPDF2
    from PIL import Image
    import io
    HAS_PYPDF2 = True
except ImportError:
    HAS_PYPDF2 = False

def extract_images_pymupdf(pdf_path, output_dir):
    """Extract images using PyMuPDF (fitz) - best method"""
    images_extracted = []
    
    try:
        doc = fitz.open(pdf_path)
        
        for page_num in range(len(doc)):
            page = doc[page_num]
            image_list = page.get_images()
            
            for img_index, img in enumerate(image_list):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                
                img_filename = f"{Path(pdf_path).stem}_page{page_num+1}_img{img_index+1}.{image_ext}"
                img_path = os.path.join(output_dir, img_filename)
                
                with open(img_path, "wb") as img_file:
                    img_file.write(image_bytes)
                
                images_extracted.append(img_path)
                print(f"Extracted: {img_filename} ({base_image['width']}x{base_image['height']})")
        
        doc.close()
        return images_extracted
    except Exception as e:
        print(f"Error extracting images with PyMuPDF: {e}")
        return []

def extract_images_pypdf2(pdf_path, output_dir):
    """Extract images using PyPDF2"""
    images_extracted = []
    
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            
            for page_num, page in enumerate(pdf_reader.pages):
                if '/XObject' in page['/Resources']:
                    xObject = page['/Resources']['/XObject'].get_object()
                    
                    for obj in xObject:
                        if xObject[obj]['/Subtype'] == '/Image':
                            size = (xObject[obj]['/Width'], xObject[obj]['/Height'])
                            data = xObject[obj].get_data()
                            
                            if xObject[obj]['/ColorSpace'] == '/DeviceRGB':
                                mode = "RGB"
                            else:
                                mode = "P"
                            
                            img = Image.open(io.BytesIO(data))
                            img_filename = f"{Path(pdf_path).stem}_page{page_num+1}_img{len(images_extracted)+1}.png"
                            img_path = os.path.join(output_dir, img_filename)
                            img.save(img_path)
                            images_extracted.append(img_path)
                            print(f"Extracted: {img_filename}")
        
        return images_extracted
    except Exception as e:
        print(f"Error extracting images with PyPDF2: {e}")
        return []

def extract_images_pdf2image(pdf_path, output_dir):
    """Extract images by converting PDF pages to images"""
    images_extracted = []
    
    try:
        images = convert_from_path(pdf_path, dpi=200)
        
        for i, image in enumerate(images):
            img_filename = f"{Path(pdf_path).stem}_page{i+1}.png"
            img_path = os.path.join(output_dir, img_filename)
            image.save(img_path, 'PNG')
            images_extracted.append(img_path)
            print(f"Extracted: {img_filename}")
        
        return images_extracted
    except Exception as e:
        print(f"Error extracting images with pdf2image: {e}")
        return []

def main():
    # Create output directory
    output_dir = "public/images/service"
    os.makedirs(output_dir, exist_ok=True)
    
    pdfs = {
        "Security-services.pdf": [
            "manned-guarding",
            "escort-guarding", 
            "event-protection",
            "executive-security",
            "security-training",
            "travel-security-support",
            "railways-gate-security-management"
        ],
        "facility-management.pdf": [
            "janitorial-and-pantry-services",
            "washroom-hygiene-and-pest-control",
            "carpet-shampooing",
            "mechanized-housekeeping-services",
            "electromechanical-services",
            "customer-facilitation-services-ticketing"
        ],
        "Information-Security.pdf": [
            "visitor-management",
            "surveillance",
            "parking-management",
            "integrated-smart-traffic-management",
            "incidence-response-mechanism",
            "perimeter-protection",
            "vendor-management",
            "access-control"
        ],
        "Skills-and-training.pdf": [
            "soft-skills",
            "grooming-sessions",
            "greeting-etiquettes-and-basic-manners",
            "language-training",
            "book-keeping"
        ]
    }
    
    all_extracted = {}
    
    for pdf_name, service_slugs in pdfs.items():
        if not os.path.exists(pdf_name):
            print(f"PDF not found: {pdf_name}")
            continue
        
        print(f"\n{'='*60}")
        print(f"Processing: {pdf_name}")
        print('='*60)
        
        if HAS_PYMUPDF:
            images = extract_images_pymupdf(pdf_name, output_dir)
        elif HAS_PDF2IMAGE:
            images = extract_images_pdf2image(pdf_name, output_dir)
        elif HAS_PYPDF2:
            images = extract_images_pypdf2(pdf_name, output_dir)
        else:
            print("No image extraction library available")
            continue
        
        # Map images to services (assuming one image per service in order)
        for i, service_slug in enumerate(service_slugs):
            if i < len(images):
                # Rename to service-specific name
                old_path = images[i]
                new_filename = f"{service_slug}.png"
                new_path = os.path.join(output_dir, new_filename)
                
                # Copy/rename the image
                from shutil import copy2
                copy2(old_path, new_path)
                all_extracted[service_slug] = f"/images/service/{service_slug}.png"
                print(f"Mapped: {service_slug} -> {new_filename}")
    
    # Save mapping to JSON
    mapping_file = "image-mapping.json"
    with open(mapping_file, 'w') as f:
        json.dump(all_extracted, f, indent=2)
    
    print(f"\nImage mapping saved to: {mapping_file}")
    print(f"Total images extracted: {len(all_extracted)}")

if __name__ == "__main__":
    main()

