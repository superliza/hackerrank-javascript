'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(string) {
  const VOWELS = 'aeiuo';
  let consonants = '';

  for (let vowels of string) {
    if (VOWELS.includes(vowels)) {
      console.log(vowels);
    } else if (!VOWELS.includes(vowels)) {
      consonants += vowels + '\n';
    }
  }
  console.log(consonants);
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}