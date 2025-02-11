const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const postmanApiKey =
  'PMAK-67abb8cfb06a210001ad8565-18dc3b637f0fef2e48af873ad95477c288';
const postmanCollectionId = 'ac2327cb-ee79-4043-81a4-1ed4523ffdac'; // SPT
const outputFilePath = path.join(__dirname, '../postman-spec.json');

const options = {
  hostname: 'api.getpostman.com',
  path: `/collections/${postmanCollectionId}`,
  method: 'GET',
  headers: {
    'X-Api-Key': postmanApiKey,
    'Cache-Control': 'no-cache',
  },
};

const request = https.request(options, (response) => {
  if (response.statusCode === 200) {
    const fileStream = fs.createWriteStream(outputFilePath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Collection downloaded and saved to ${outputFilePath}`);
    });
  } else {
    console.error(
      `Failed to fetch collection. Status code: ${response.statusCode}`
    );
  }
});

request.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});

request.end();
