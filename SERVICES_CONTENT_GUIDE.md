# Services Content Guide

## Overview
Individual service pages have been created for all 27 services. Each service page displays:
- 1 main image
- Service title
- Category badge
- Description (short summary)
- Content (detailed content from PDF)

## Service Pages Structure

All service pages are accessible via: `/services/[slug]`

Example: `/services/manned-guarding`, `/services/escort-guarding`

## Adding Content from PDFs

### Step 1: Locate the Service Data File
File: `public/fakedata/services-detailed.json`

### Step 2: Update Service Content

For each service, update the following fields:

```json
{
  "id": 1,
  "slug": "manned-guarding",
  "title": "Manned Guarding",
  "category": "Security Services",
  "image": "/images/service/service-1.webp",  // Update with actual image path
  "content": "Your detailed content from PDF here...",  // Extract from PDF
  "description": "Short description here..."  // Short summary
}
```

### Step 3: Content Formatting

- **content**: Can be multiple paragraphs separated by `\n`
- **description**: Single paragraph summary
- **image**: Path to service image (place images in `/public/images/service/`)

### Step 4: Image Requirements

1. Place service images in: `public/images/service/`
2. Recommended format: WebP or PNG
3. Recommended size: 870x450px (or similar aspect ratio)
4. Update the `image` field in JSON with the correct path

### Step 5: Content Extraction Tips

When extracting from PDF:
- Copy text content exactly as it appears
- Preserve paragraph breaks
- Remove any special characters that might cause quote errors
- Use proper JSON escaping for quotes: `\"` for quotes within content
- Ensure no trailing commas in JSON

### Example Content Update

```json
{
  "id": 1,
  "slug": "manned-guarding",
  "title": "Manned Guarding",
  "category": "Security Services",
  "image": "/images/service/manned-guarding.webp",
  "content": "Our manned guarding services provide comprehensive security coverage for a wide range of clients.\n\nWe offer professional security personnel trained to handle various security scenarios and ensure the safety of people, premises, and assets.\n\nOur services are customized based on your specific security requirements.",
  "description": "Professional security personnel for people, premises, and events with customized solutions tailored to your specific requirements."
}
```

## All Services List

### Security Services
1. Manned Guarding - `/services/manned-guarding`
2. Escort Guarding - `/services/escort-guarding`
3. Event Protection - `/services/event-protection`
4. Executive Security - `/services/executive-security`
5. Security Training - `/services/security-training`
6. Travel Security Support - `/services/travel-security-support`
7. Railways Gate Security Management - `/services/railways-gate-security-management`

### Facility Management
8. Janitorial and Pantry Services - `/services/janitorial-and-pantry-services`
9. Washroom Hygiene and Pest Control - `/services/washroom-hygiene-and-pest-control`
10. Carpet Shampooing - `/services/carpet-shampooing`
11. Mechanized Housekeeping Services - `/services/mechanized-housekeeping-services`
12. Electromechanical Services - `/services/electromechanical-services`
13. COVID Sanitization - `/services/covid-sanitization`
14. Customer Facilitation Services/Ticketing - `/services/customer-facilitation-services-ticketing`

### Information Security
15. Visitor Management - `/services/visitor-management`
16. Surveillance - `/services/surveillance`
17. Parking Management - `/services/parking-management`
18. Integrated Smart Traffic Management - `/services/integrated-smart-traffic-management`
19. Incidence Response Mechanism - `/services/incidence-response-mechanism`
20. Perimeter Protection - `/services/perimeter-protection`
21. Vendor Management - `/services/vendor-management`
22. Access Control - `/services/access-control`

### Skills & Training
23. Soft Skills - `/services/soft-skills`
24. Grooming Sessions - `/services/grooming-sessions`
25. Greeting Etiquettes and Basic Manners - `/services/greeting-etiquettes-and-basic-manners`
26. Language Training - `/services/language-training`
27. Book Keeping - `/services/book-keeping`

## Testing

After updating content:
1. Run `npm run build` to check for errors
2. Verify no quote errors in build output
3. Test individual service pages in browser
4. Verify images load correctly

## Notes

- All content is stored in JSON format
- Content supports multi-paragraph text (use `\n` for line breaks)
- Images should be optimized (WebP format recommended)
- Ensure proper JSON syntax (no trailing commas, proper quote escaping)

