// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1. Remove the Banana from the array.
var newArray = array.shift();
console.log(newArray);// this will show Banana, because that's what we shift out of the array
console.log(array);//this will show "Apples", "Oranges", "Blueberries"
// 2. Sort the array in order.
var newArray = array.sort();
console.log(newArray);

// 3. Put "Kiwi" at the end of the array.
var newArray = array.concat("Kiwi");
console.log(newArray);

// 4. Remove "Apples" from the array.
var newArray = array.shift();
var newArray2 = array.shift();
console.log(array);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]
var array =["Blueberries", "Oranges", "Kiwi"];
console.log(array.reverse());

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

console.log(array2[1][1][0]);