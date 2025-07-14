//1. Create an object for animal and car

// Animal object
let animal = {
  name: 'Tiger',
  type: 'Mammal',
  sound: 'Roar',
  legs: 4
};

// Car object
let car = {
  brand: 'Toyota',
  model: 'Corolla',
  color: 'Blue',
  wheels: 4
};

console.log(animal);
console.log(car);

// 2. Find duplicates in a string (optional using array)

let str = "programming";
let chars = str.split('');
let duplicates = chars.filter((item, index) => chars.indexOf(item) !== index);
let uniqueDuplicates = [...new Set(duplicates)];
console.log(uniqueDuplicates);

// 3. Reverse a string using array method

let original = "frontend";
let reversed = original.split('').reverse().join('');
console.log(reversed);  // Output: "dnetnorf"


// 4. Find the highest and lowest value in array

let numbers = [23, 87, 12, 45, 6, 91];
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log("Highest:", max);  // 91
console.log("Lowest:", min);   // 6


//5. Sorting of an array (optional)

let values = [9, 2, 5, 3, 7];
values.sort((a, b) => a - b); // Ascending
console.log("Ascending:", values);

values.sort((a, b) => b - a); // Descending
console.log("Descending:", values);

//6. Display first 3 elements in array in UI (HTML + JS)


//7. Remove 4th index element and add 2 elements there

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.splice(4, 1, 'x', 'y');  // Removes 1 item at index 4, adds 'x' and 'y'
console.log(arr);  // ['a', 'b', 'c', 'd', 'x', 'y', 'f']

