const fs = require('fs');
const os = require('os');

// // Sync
// fs.writeFileSync('./test.txt', "Heyyyyyyyyy Sync");

// // Async
// fs.writeFile('./test.txt', "Heyyyyyyyyy Async", (err) => { });

// Returns
// Blocking...
// Default Thread pool size = 4 and can increase to if 8 core cpu then 8 using require('os') module in node.js
// console.log(1);
// result = fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(result);
// console.log(2);

// Non - blocking... (Async)
// console.log(1);
// result = fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(result);
// });
// console.log(2);


// Return type --> void
// fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log('Error', err);
//     } else {
//         console.log(result);
//     }
// });

fs.appendFileSync("./test.txt", `${Date.now()} `);

//copy file
// fs.cpSync('./test.txt', './copy.txt');

//delete file
// fs.unlinkSync('./copy.txt');

// Stats of file
// console.log(fs.statSync('./test.txt'));
// console.log(fs.statSync('./test.txt').isFile());

// make folders
// fs.mkdirSync('my-docs')
// fs.mkdirSync('my-docs/a/b', { recursive: true });

console.log(os.cpus().length)

// Try to write code that is non-blocking that is async