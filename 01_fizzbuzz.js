fizzBuzz = function(num) {
// write a function that receives a number as its argument;
// if the number is divisible by 3, the function should return 'fizz';
// if the number is divisible by 5, the function should return 'buzz';
// if the number is divisible by 3 and 5, the function should return
// 'fizzbuzz';
//
// otherwise the function should return the number, or false if no number
// was provided or the value provided is not a number
}

// TEST CASES will be provided by the test runner
console.log('fizzBuzz(undefined) === false :', fizzBuzz(undefined) === false);
console.log('fizzBuzz(foo) === false :', fizzBuzz(foo) === false);
console.log('fizzBuzz(22) === 22 :', fizzBuzz(22) === 22);
console.log('fizzBuzz(33) === "fizz" :', fizzBuzz(33) === "fizz");
console.log('fizzBuzz(55) === "buzz" :', fizzBuzz(55) === "buzz");
console.log('fizzBuzz(150) === "fizzbuzz" :', fizzBuzz(150) === "fizzbuzz");