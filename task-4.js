// Write a function to find the longest word in a given string.
let str = "I am learning Programming to become a programmer";

function findLongestWord(str) {
  let strToArray = str.split(" ");
  let longWord = "";
  for (let item of strToArray) {
    if (item.length > longWord.length) {
      longWord = item;
    }
  }
  return longWord;
}
let result = findLongestWord(str);
console.log(result);
