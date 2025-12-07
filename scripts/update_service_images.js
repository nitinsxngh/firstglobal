const fs = require('fs');
const path = require('path');

// Read the image mapping
const imageMapping = JSON.parse(fs.readFileSync('image-mapping.json', 'utf8'));

// Read the services JSON
const servicesPath = path.join('public', 'fakedata', 'services-detailed.json');
const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

// Update each service with its corresponding image
services.forEach(service => {
  if (imageMapping[service.slug]) {
    service.image = imageMapping[service.slug];
    console.log(`Updated ${service.slug}: ${imageMapping[service.slug]}`);
  } else {
    console.log(`No image found for ${service.slug}`);
  }
});

// Write back to file
fs.writeFileSync(servicesPath, JSON.stringify(services, null, '\t') + '\n', 'utf8');
console.log('\nAll services updated!');

