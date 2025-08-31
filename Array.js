// Array 

/*const myArr = [0,1,2,3,4,5]
console.log(myArr[2]); // output => 2.
console.log(myArr.length) // output => 6.

const myHeros = ["Shaktiman", "naagraj"];
console.log(myHeros[1]); // output => naagraj.
console.log(myHeros.length); // output => 2.

const myArr2 = new Array(1,2,3,4,5);
console.log(myArr2[0]); // output => 1.

// Array Methods.

myArr.push(6);
console.log(myArr)  // Output => [0,1,2,3,4,5,6].
myArr.push(7);
console.log(myArr)  // Output => [0,1,2,3,4,5,6,7].

myArr.pop(); // It will delete the last element of Array.
console.log(myArr)  // Output => [0,1,2,3,4,5,6].


myArr.unshift(9); // it insert the element at the starting of Array.
console.log(myArr); //output => [9,0,1,2,3,4,5,6].

myArr.shift(); // It used to delete Starting element. 
console.log(myArr); // output => [0,1,2,3,4,5,6].
console.log(myArr.includes(9)); // output => false
console.log(myArr.indexOf(3)); // output => 3.
console.log(myArr.indexOf(9)); // output => -1 (not in this Array).

const newArr = myArr.join();
console.log(myArr); // output => [0,1,2,3,4,5,6].
console.log(typeof myArr); // output => object.
console.log(newArr); // output => 0,1,2,3,4,5,6.
console.log(typeof newArr); // output => String. */

//****** slice & splice ********** */
const Array = [10,20,30,40,50];
console.log(Array); // Output => [10,20,30,40,50].

const myNewArray = Array.slice(1,3);
console.log(myNewArray); // Output => [20,30].

const myNewArray2 = Array.splice(1,3);
console.log("Original Array", Array); // output => Original Array [ 10, 50 ] [ 20, 30, 40 ]
console.log(myNewArray2); // Output => [ 20, 30, 40 ]


/* 
slice() Method:
Purpose: The slice() method extracts a section of an array and returns a new array containing the selected elements.
Original Array: It does not modify the original array.


splice() Method:
Purpose:
The splice() method modifies the original array by adding, removing, or replacing elements. 
Original Array:
It modifies the original array directly.*/








