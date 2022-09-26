// 1. 
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log(maxOfTwoNumbers(3, 9));

// 2.

let maxOfThree = function(x, y, z) {
    if (x >= y && x >= z){
        return x;
    }else if (y >= x && y >= z) {
        return y;
    }else{
        return z;
    }
}

console.log(maxOfThree(1, 7, 10));

// 3. 

function isCharAVowel(a) {
    a = a.toLowerCase(); //can convert to .toUpperCase as well (making the input non case-sensitive)
    console.log('aeiouy'.indexOf(a)); 
    return ('aeiouy'.indexOf(a) > -1);
}

console.log(isCharAVowel('c'), 'character vowel');

// let vowels = ["a","e","i","o","u"]
// function isCharAVowel(inp){
//   inp = inp.toLowerCase();
//   return (vowels.indexOf(inp) > -1);
// }
// console.log(isCharAVowel("e"))

//4. 

const sumArray = function(arr) {
    let sum = 0; //initializing sum to be 0
    arr.forEach(function(num) { //takes each number in array one by one 
    sum += num; 
  });
  return sum;
}

console.log(sumArray([2,4,5]));

//5.

function multiplyArray(arr) {
  let product = 1; //1 because if we multiply by 0, the asnwer will be 0
  for (let i = 0; i < arr.length; i++) { //index starts at 0, is less than array length and each time the function runs it adds 1 (++)
    product *= arr[i];
  }
  return product;
}

console.log(multiplyArray([2, 4, 5]));

//6.

const numArgs = function(...args) {
    return args.length
}

console.log(numArgs('test', true, 5));

//7. 

function reverseString(str) {
    let arr = str.split(''); //we split string, anything that is in brackets removed that from the string (can add ., for example)
    console.log(arr);
    return arr.reverse().join(''); //now we reverse the array and join together
}

console.log(reverseString("Baby"));

//8. 

const longestStringInArray = function(arr) {
  let longest = 0; //initializing the function
  arr.forEach(function(s) {
      console.log(s.length);
    if (s.length > longest) longest = s.length;
  });
  return longest;
};

console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning']));

// 9.
function stringsLongerThan(arr, len) {
  return arr.filter(function(s) {
      console.log(s);
    return (s.length > len);
  });
};

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
