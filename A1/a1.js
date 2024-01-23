/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Kiarash Kia Student ID: 108688235 Date: 01/22/2024
*
********************************************************************************/ 

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Do you wish to process a File (f) or directory (d): ', function(userInput) {
    if (userInput.toLowerCase() === 'f') {
        rl.question('File: ', function(fileName) {
            fs.readFile(fileName, 'utf8', function(err, fileContent) {
                if (err) {
                    console.log(`Error reading file: ${err.message}`);
                } else {
                    fileContent = fileContent.replace(/\s+/g, ' ').trim();
                    console.log(`Number of Characters (including spaces): ${fileContent.length}`);

                    const words = fileContent.replace(/[^\w\s\']/g, "").split(' ');
                    console.log(`Number of Words: ${words.length}`);
                    console.log(`Longest Word: ${findLongestWord(words)}`);
                }
                rl.close();
            });
        });
    } else if (userInput.toLowerCase() === 'd') {
        rl.question('Directory: ', function(dirName) {
            fs.readdir(dirName, function(err, files) {
                if (err) {
                    console.log(`Error reading directory: ${err.message}`);
                } else {
                    files.sort().reverse();
                    console.log('Files (reversed  alphabetical order):');
                    files.forEach(function(file) {
                        console.log(`${file}: ${fs.statSync(dirName + '/' + file).size} bytes`);
                    });
                }
                rl.close();
            });
        });
    } else {
        console.log('Invalid Selection');
        rl.close();
    }
});

function findLongestWord(words) {
    var longestWord = '.';
    words.forEach(function(word) {
        if (word.length > longestWord.length) longestWord = word;
    });
    return longestWord;
}