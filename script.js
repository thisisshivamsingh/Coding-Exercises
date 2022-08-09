/////////// IS GIVEN VALUE IS ARRAY OR NOT? //////////

// let arr = "test";
// // console.log(typeof arr);
// // console.log(Object.prototype.toString.call(arr));
// console.log(toString.call(arr));
// if (toString.call(arr) === "[object Array]") {
//   console.log("true");
// } else {
//   console.log("false");
// }

/////////// REMOVE DUPLICATE VALUES FROM ARRAY //////////

// let arr = [1, 2, 3, 4, 5, 3, 5];

// const uArr = arr.filter((v, i) => {
//   //   console.log(v + "-" + arr.indexOf(v) + "-" + i);
//   return arr.indexOf(v) === i;
// });
// console.log(uArr);

// let arr = [1, 2, 3, 4, 5, 3, 5];
// let uArr = [...new Set(arr)];
// console.log(uArr);

/////////// REMOVE NULL, UNDEFINED, 0, NAN AND "" FROM ARRAY? //////////

// let arr = [false, 0, NaN, 6, undefined, 90, "", "Hi"];

// const filteredArr = arr.filter((v, i) => {
//   return v;
//   // if (v) {
//   //   return v;
//   // }
// });
// console.log(filteredArr);

/////////// FINDING FACTORIAL //////////

// n = parseInt(prompt("Enter a number:"));
// factorial = 1;

// for (; n >= 1; n--) {
//   factorial = factorial * n;
// }
// console.log("Factorial=" + factorial);

////////// PRIME NUMBER ///////////

// var n = parseInt(prompt("Enter a number:"));
// for (let cnt = 2; cnt < n; cnt++) {
//   if (n % cnt === 0) {
//     console.log("Not prime");
//   } else {
//     console.log("Prime");
//   }
// }

// var n = parseInt(prompt("Enter a number:"));
// isPrime = true;
// for (let cnt = 2; cnt < n; cnt++) {
//   if (n % cnt === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime == true) {
//   console.log(n + " is a prime number");
// } else {
//   console.log(n + " is not a prime number");
// }

////////// VOWEL & CONSONANT - ALGORITHM ///////////

let ch;
function getVal() {
  ch = prompt("Enter character :");
  ch = ch.toLowerCase();
  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    console.log("Is vowel");
  } else {
    console.log("Is consonant");
  }
}
getVal();
