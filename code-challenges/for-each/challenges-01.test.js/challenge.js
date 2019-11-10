'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function named greeting that takes in a string and returns the string in all uppercase letters.
Then, write a function named speaker that takes in a string and a callback function. The speaker function should return the string in all uppercase letters only by invoking the callback.
------------------------------------------------------------------------------------------------ */

const greeting = (word) => {
    return word.toUpperCase();
};

const speaker = (message, callback) => {
    return callback(message);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.
Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)
Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.
Return the modified array.
------------------------------------------------------------------------------------------------ */

const addValues = (arr, value) => {
    arr.push(value);
};

const addNumbers = (num, arr, times, callback) => {
    for (let i = 0; i < times; i++) {
        callback(arr, num);
      }
      return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named removeOne that takes in a number and an array. If the number divided by three has a remainder of two, pop one element off of the array.
Hint: you may want to look into the modulo operation.
Then, write a function named removeElements that takes in an array and a callback. This function should use a for loop to iterate over the array and invoke the callback once for each element in the array.
Return the modified array.
------------------------------------------------------------------------------------------------ */

const removeOne = (num, arr) => {
    if (num % 3 === 2) {
        arr.pop();
      }
};

const removeElements = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], arr);
      }
      return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named removeWithForEach that produces the same output as challenge 3, but uses forEach.
------------------------------------------------------------------------------------------------ */

const removeWithForEach = (arr, callback) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named removeWithAnon that produces the same output as challenges 3 and 4.
This function should use forEach again, but rather than taking in a callback as an argument, define an anonymous function as the argument to forEach.
This anonymous function should accept up to three arguments: the element, the index, and the array.
------------------------------------------------------------------------------------------------ */

const removeWithAnon = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named createList that takes in an array of the current store intentory.
The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]
This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */

const createList = (availableItems) => {
  // Solution code here...
};