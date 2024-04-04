// file handling
// fs is inbuilt module in Node.js
const fs = require("fs");

// Sync...
// fs.writeFileSync("./test.txt", "Hello World Sync");

//Async..
// Whenever writing a async operation we have complusory give a Callback.
// fs.writeFile("./test.txt", "Hello World Async.", (err, result) => {});

// const result = fs.readFileSync("./contact.txt", "utf-8")
// console.log(result);

// utf-8 -> s a character encoding capable of encoding all possible characters in Unicode.

// Why it's used: -> In Node.js (and in programming in general), when reading from or writing to files, 
// you need to specify the encoding because files are stored as a series of bytes, 
// which need to be interpreted as characters. If you don't specify an encoding, 
// Node.js will treat the file as binary data and return a buffer. However, if you specify "utf-8", 
// Node.js will decode the bytes into characters using the UTF-8 encoding, and return a string.


// One difference between sync and async is that in sync you can create variable,
// but in async you have to write a callback.
//Async
fs.readFile("./contact.txt", "utf-8", (err, result) => 
{
    if(err)
    {
        console.log("Error : ", err);
    }
    else
    {
        console.log(result);
    }
})


fs.appendFileSync("./test.txt", `${Date.now()}Hey Bro\n`);


// fs.cpSync("./test.txt", "./copy.txt");

//To delete file
// fs.unlinkSync("./copy.txt");


//TO give status of a file.
console.log(fs.statSync("./test.txt"));
