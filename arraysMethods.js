// include() method > The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
Example:
const array = [12, 34, 45, 67, 88];
console.log(array.includes(50));
// Output will be false since 50 is not in the array

// some() method > The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
Example:
const numbers = [11, 44, 78, 88];
const odd = (element) => element % 2 != 0;
console.log(numbers.some(odd));
// Output will be true since 11 is odd among the other even numbers

// sort() method > The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted
Example:
let fruits = ['apple', 'banana', 'orange', 'MANGO'];
fruits.sort();
console.log(fruits);
// Output: MANGOES, apple, banana , orange

// unshift() method > it adds an element to the beginning of the array
Example:
const arrayy = [12, 77,98]
arrayy.unshift(32)
console.log(arrayy)
// Output [32, 12, 77, 98]
