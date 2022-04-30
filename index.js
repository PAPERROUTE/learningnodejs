const fs = require('fs');

const fileIn = fs.readFileSync('file.txt', 'utf-8');
console.log(fileIn);



const textOut = `This is me writing to  the file: ${fileIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync('output.txt', textOut);
console.log("File written!");