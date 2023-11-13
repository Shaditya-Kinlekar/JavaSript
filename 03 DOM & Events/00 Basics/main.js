'use strict';

document.getElementById('parent').setAttribute('class', 'myDiv');
console.log(document.querySelector('#parent').className);
//  sets the attribute for a element, the  previous value are overwritten

// console.log(document.getElementById('title').innerHTML);
// give  the value of the element with text + elements

// console.log(document.getElementById('title').innerText);
// gives the visible text

// console.log(document.getElementById('title').textContent);
// gives the entire text

const para = document.querySelector('#parent p:first-child');
console.log(para);
//   gives the first child of the parent (the p element)

console.log(document.querySelector('input[type="password"]'));
// gets the element input with a attribute (type) of 'password'

const list = document.querySelectorAll('ul li');
// returns a nodelist - In JavaScript, a NodeList is an object that represents a collection of nodes returned by a DOM query. It is similar to an array, but it is not an actual array and does not have array methods like forEach or map

console.log(list);
list[0].style.color = 'cyan';
// since the  nodelist has indexes we can use them to manipulate the elements in the list
list[2].style.color = 'yellow';

// Get the inner HTML content of the first 'ul' element on the page
const visibleList = document.querySelector('ul').innerHTML;
// Create a new 'ul' element
const ulElement = document.createElement('ul');
// Set the 'id' attribute of the new 'ul' element to 'listContainer'
ulElement.setAttribute('id', 'listContainer');
// Set the inner HTML content of the new 'ul' element to the value of 'visibleList'
ulElement.innerHTML = visibleList;
// Get the 'div' element with the id 'container'
const div = document.getElementById('container');
// Append the new 'ul' element as a child of the 'div' element
div.appendChild(ulElement);

//* working with nodelist
const myList = document.querySelectorAll('#listContainer li');
myList.forEach((li) => {
    li.style.backgroundColor = 'gray';
});

//* HTML collection
const items = document.getElementsByClassName('list-item');
//  gets the elements and returns a HTMLCollection

//* converting HTMLCollection to Array
const collectionToArray = Array.from(items);
collectionToArray.forEach((li) => (li.style.color = 'orange'));
