// Write a function to count the number of vowels in a string.
// Vowel is a, e, i, o, u,
function countVowel(str) {
  // Convert To LowerCase
  str = str.toLowerCase();

  //   Convert Array
  let convertArray = str.split("");
  //   Push Vowel
  let vowelList = [];
  for (let item of convertArray) {
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    ) {
      if (vowelList.includes(item) === false) {
        vowelList.push(item);
      }
    }
  }
  let foundVowel = vowelList.join(",").toUpperCase();
  return `Vowel is: ${foundVowel}, Total Found: ${vowelList.length}`;
}

let str = "Atters that rAprEsent speech sOunds";
let result = countVowel(str);
console.log(result);
