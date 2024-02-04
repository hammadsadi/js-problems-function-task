// You are given an array of numbers. Count how many times the a number is repeated in the array.
let numbers = [5, 6, 11, 12, 98, 5, 11];

function countDuplicate(numbers) {
  let checkDuplicate = [];
  let duplicateList = [];

  for (let item of numbers) {
    if (checkDuplicate.includes(item)) {
      duplicateList.push(item);
    } else {
      checkDuplicate.push(item);
    }
  }
  return `Find ${duplicateList.join(",")}, Output: ${duplicateList.length}`;
}

console.log(countDuplicate(numbers));
