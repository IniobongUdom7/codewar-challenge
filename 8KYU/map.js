//Given an array of integers, return a new array with each value doubled.

//For example:

//[1, 2, 3] --> [2, 4, 6]

function doubleValues(array) {
    var newArray = [];
    array.forEach(function (el) { newArray.push(el, el); });    
    return newArray;
  }
  
  console.log(doubleValues([1,2,3]));