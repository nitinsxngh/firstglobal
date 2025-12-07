# PDF Content Extraction Instructions

Since automated PDF extraction is having compatibility issues, please follow these steps:

## Option 1: Manual Extraction (Recommended)

1. Open `Security-services.pdf` in a PDF viewer
2. For each service section, copy the text content
3. Update the corresponding entry in `public/fakedata/services-detailed.json`

## Option 2: Use Online PDF to Text Converter

1. Go to https://www.ilovepdf.com/pdf-to-txt or similar service
2. Upload `Security-services.pdf`
3. Download the extracted text
4. Copy content for each service into the JSON file

## Option 3: Use macOS Preview

1. Open `Security-services.pdf` in Preview
2. Select text and copy
3. Paste into the JSON file

## Services to Extract

### Security Services Category:
1. **Manned Guarding** - slug: `manned-guarding`
2. **Escort Guarding** - slug: `escort-guarding`
3. **Event Protection** - slug: `event-protection`
4. **Executive Security** - slug: `executive-security`
5. **Security Training** - slug: `security-training`
6. **Travel Security Support** - slug: `travel-security-support`
7. **Railways Gate Security Management** - slug: `railways-gate-security-management`

## JSON Structure to Update

For each service, update these fields in `public/fakedata/services-detailed.json`:

```json
{
  "id": 1,
  "slug": "manned-guarding",
  "title": "Manned Guarding",
  "category": "Security Services",
  "image": "/images/service/manned-guarding.webp",  // Update with actual image
  "content": "Paste detailed content from PDF here...\n\nMultiple paragraphs separated by \\n",
  "description": "Short summary description"
}
```

## Image Extraction

For images from the PDF:
1. Open PDF in Preview or Adobe Reader
2. Export each service image as PNG/WebP
3. Save to `public/images/service/` with descriptive name
4. Update the `image` field in JSON

## After Updating

Run: `npm run build` to verify no errors

