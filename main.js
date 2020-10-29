'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (str) => {
  let strArray = str.toLowerCase().trim().split(" ")
  let translatedArray = []
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;

  for (let i=0; i<strArray.length; i++) {
    str = strArray[i]
    if (vowels.includes(str[0])) {
      translatedArray.push(str + "yay");
    } else{
      for (let char of str) {
        if (vowels.includes(char)) {
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      translatedArray.push(str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay");
    }
    
  }
  console.log(translatedArray.join(" "))
  return translatedArray.join(" ")
}



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    it('should lowercase and translate a sentence with multiple words', () => {
      assert.equal(pigLatin('Here have some chicken'), 'erehay avehay omesay ickenchay');
      assert.equal(pigLatin(' You should Eat a chickEn pot Pie todaY'), 'ouyay ouldshay eatyay ayay ickenchay otpay iepay odaytay');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.