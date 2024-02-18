//* jsvu stands for "JavaScript (engine) Version Updater". It is a command-line utility that allows developers to easily install and manage multiple JavaScript engines (like V8, SpiderMonkey, JavaScriptCore, and Chakra) for testing and development purposes. In V8 debugging, %DebugPrint is a debugging function that prints a representation of an object's internal structure.

// const myArr = [];
// %DebugPrint(myArr);

// 2 types of array
//*  1. continuous array (PACKED) - An array in which elements are stored in a contiguous block in memory, having no gaps between them.
const continuousArray = [1, 2, 3, 4, 5];
console.log(continuousArray);

//*  2. holey array - An array that has gaps between its elements due to deletion or non-contiguous allocation, causing the V8 engine to handle it differently for optimization purposes.
const holeyArray = [1, , 3, , 5];
console.log(holeyArray);

// In JavaScript, especially within the V8 engine, arrays are categorized into different types based on the kind of elements they contain.

// 1. Small Integer (SMI): For small integers in the 31-bit signed integer range, V8 uses a special representation called Small Integer (SMI). Anything that is not a SMI is represented as a HeapObject, which is the address of some entity in memory. For numbers, V8 uses a special kind of HeapObject, the so-called HeapNumber, to represent numbers that aren’t inside the SMI range. SMI is specifically optimized for because small integers are so common in real-world JavaScript programs.
-Infinity - // HeapNumber
  2 ** 30 -
  1 - // HeapNumber
  2 ** 30 - // Smi
  42 - // Smi
  0; // HeapNumber
0; // Smi
4.2; // HeapNumber
42; // Smi
2 ** 30 - 1; // Smi
2 ** 30; // HeapNumber
Infinity; // HeapNumber
NaN; // HeapNumber

// 2. Packed Elements: When an array is created, V8 assigns it an initial elements kind based on the type of the first element. For example, if the array is initialized with integers, its elements kind is PACKED_SMI_ELEMENTS. Later, adding a floating-point number to the same array transitions it to a more generic elements kind: PACKED_DOUBLE_ELEMENTS. Adding a string literal to the array changes its elements kind once again to PACKED_ELEMENTS
const array = [1, 2, 3]; // elements kind: PACKED_SMI_ELEMENTS
array.push(4.56); // elements kind: PACKED_DOUBLE_ELEMENTS
array.push('x'); // elements kind: PACKED_ELEMENTS

// 3. Double Arrays: Double arrays are arrays that contain only floating-point numbers. They are still very fast, and given the prevalence of doubles in JavaScript, it is reasonable to assume that all engines have good support for doubles and double arrays
const array2 = [1.1, 2.2, 3.3]; // elements kind: PACKED_DOUBLE_ELEMENTS

//! these are optimizations done by the JavaScript engine (like V8) and are not visible in JavaScript code. They are intended to improve performance, but they don't change the way you write JavaScript code.

// eg:
const arr = [1, 2, 3, 4, 5]; // currently PACKED_SMI_ELEMENTS

arr.push(8.3); // now PACKED_DOUBLE_ELEMENTS
arr.push('x'); // now PACKED_ELEMENTS

arr[10] = 982; // now Holey elements

console.log(arr);

console.log(arr[9]);
// To access `arr[9]` in JavaScript, the engine follows these steps:
// 1. Bound Check: First, JavaScript checks if the requested index is within the bounds of the array. Since arrays in JavaScript are zero-indexed, an index of `9` refers to the tenth element. If the array has fewer than ten elements, the bound check fails, and the result is `undefined`.

// 2. Has Own Property Check: Next, JavaScript checks if the array has an own property with the key `9`. In JavaScript, arrays are objects, and properties can be added to objects dynamically. If the array had an explicit property with the key `9`, this would return the value of that property. However, since we removed the elements added after initialization, the array does not have an own property with the key `9`.

// 3. Prototype Chain Check: If the array does not have an own property with the key `9`, JavaScript proceeds to check the prototype chain. It first checks if `Object.prototype` has a property with the key `9`. Since `Object.prototype` does not have indexed properties, this check also returns `undefined`.

// 4. Prototype Chain Continuation: JavaScript continues checking the prototype chain until it reaches the end without finding a property with the key `9`. Since arrays inherit from `Object.prototype`, and `Object.prototype` does not have indexed properties, the final result is `undefined`.

// 5. Return Value: After completing the above steps, JavaScript returns `undefined` because there is no element at index `9` in the array.

// "holes are expensive in JavaScript",
//  -> it's true that accessing elements in a holey array can be less performant than accessing elements in a continuous array. This is because the JavaScript engine has to traverse the prototype chain to find the actual value, which takes more time compared to accessing elements in a continuous array where the value is directly associated with the index. Additionally, holey arrays can lead to unexpected behavior when iterating over the array with methods like `forEach`, `map`, etc., because these methods skip over the holes.

// optimization order
// continuous:  SMI [42, 23] > DOUBLE [4.2, 2 ** 30] > PACKED [1, "a"]
// holey:H_SMI > H_DOUBLE > H_PACKED

// arr4 is initialized using the Array constructor with a fixed size but without initial values, which creates an array with "holes" (empty slots). When elements are added to arr4, it transitions from a "holey" state to a state that might be less optimized for certain operations because JavaScript engines might not apply certain optimizations to holey arrays due to the need to check for the presence of elements.
const arr4 = new Array(3);
// just 3 holes, HOLEY_SMI_ELEMENTS
arr4[0] = '1'; // Fills the first hole
arr4[1] = '2'; // Fills the second hole
arr4[2] = '3'; // Fills the third hole
// The array is no longer holey after these assignments

// arr5, on the other hand, is created as an empty array and elements are added using the push method. This results in a "packed" array without any holes from the start.
const arr5 = [];
arr5.push('1'); // PACKED ELEMENTS
arr5.push('2'); // PACKED ELEMENTS
arr5.push('3'); // PACKED ELEMENTS
// Remains a packed array throughout

/* 
The `arr5` approach is better for optimization because:
1. Contiguous Memory: It fills array slots sequentially, avoiding holes for better memory efficiency.
2. Predictable Layout: The engine can optimize for contiguous memory access, improving iteration speed.
3. Correct Iteration: Methods like `forEach` won't skip over holes, ensuring accurate results.
4. Lower Memory Usage: It only uses memory for actual elements, unlike `arr4` which reserves space for all indices.
5. Clearer Code: Using `push()` is more intuitive and avoids confusion about holes.
*/
