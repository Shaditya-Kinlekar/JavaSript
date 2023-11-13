'use strict';

// Every Variable has a data type that tells what kind of data is being stored in a variable. There are two types of data types in JavaScript:
// 1. Primitive data types
// 2. Non-primitive data types

//*  Primitive data types: The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.
//* Primitives ->  string, number, bigint, boolean, symbol, null and undefined

//*  Non-primitive data types (Objects): The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.
//* Non-primitive data types -> object, array, function

// PRIMITIVES VS OBJECTS

/* 
when we are talking about memory/memory management:
its easier to call "primitives" -> primitive types & "objects" -> reference types 

JS ENGINE: Call Stack + Heap
1. Call Stack: functions are executed/primitives/primitive types are stored in call stack -> where execution context run 
2. Heap: objects are stored in memory(Heap)
*/

//* Primitive values
let lastName = 'Williams';
let oldLastName = lastName; // points to the memory address of lastName ie 'Williams'
lastName = 'Davis'; // now lastName stores this value at a new memory address and points to it
console.log(lastName); // 'Davis'
console.log(oldLastName); // 'Williams'

//* Reference values
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
// does not create new obj in the heap instead references to the same obj as jessica{...}
// so when marriedJessica changes, jessica also changes
marriedJessica.lastName = 'Davis';
// note that in the "stack" the 'memory address' of the object is stored to which jessica and marriedJessica 'point' to and even though the variables are declared with const, we are not actually changing the address in the stack but we change the values of the obj in the heap(which is possible), so if u change the values in marriedJessica then jessica will also change

console.log(`Before Marriage: ${jessica.lastName}`);
console.log(`After Marriage: ${marriedJessica.lastName}`);

// marriedJessica = {}
//! here we are assiginig new value/obj to marriedJessica, which will create new address in the "heap", so the reference of marriedJessica will change and point to the new addresss and since marriedJessica is const, this is not possible and will give error
// note that: this can be done with "let"

//* Copying Objects
//? what if there was a way to actually copy the x obj and store in y and when any value changed in y, the x obj does not change???

const x = {
    firstName: 'Daisy',
    lastName: 'Shaw',
    age: 28,
};

// merges 2 objs and creates a new obj
const z = Object.assign({}, x);
// x and empty obj({}) are combined and stored in a new variable "z" which holds this new obj which is stored at a new memory address(eg: 0002 -> {...}) in the heap and now "z" points to the new address(of the obj in the heap) in the stack(eg: z -> 0002) -> so when "z" changes, "x" does not change
z.lastName = 'Fernandes';
console.log(x);
console.log(z);
//! Note: there is a problem, using Object.assign() only works on the first level, it only creates a shallow copy and not a deep clone.
// shallow copy -> copies properties only of the first level
// deep copy/clone -> copies everything

// the problem is using Object.assign() it works on the first level only, so the reference(address) of the nested objects will remain same:
const friendA = {
    fname: 'John',
    friends: ['Alice', 'Bob'],
};

const friendB = Object.assign({}, friendA);
friendB.friends.pop();
//? now theres a problem, since friends is a nested array/object inside 'friendA' & since 'friendB' copied the properties from friendA the 'memory address remain the same' for nested objects and if u change anything in the nested objects it will change the original obj as well. Technically, both the objs friendA and friendB have same property -> "friends" which points at the same object i.e "[...]" in the "heap memory"
// friendA.friends.pop();
// friendA.friends.push('kimmm')
console.log('Before', friendA);
console.log('After', friendB);

// deep clone -> can be done with external library like lodash
