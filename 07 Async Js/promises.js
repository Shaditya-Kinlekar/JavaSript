'use strict';

//* Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
/* 
    * A promise has three states:
        - Pending: Initial state, neither fulfilled nor rejected.
        - Fulfilled/Resolved: Operation completed successfully.
        - Rejected: Operation failed.

    * A promise has two callback functions:
        .then() - Called when the promise is fulfilled with a resolved value
        .catch() - Called when the promise is rejected with a reason
*/

const promiseOne = new Promise((resolve, reject) => {
  // Do any async task
  setTimeout(() => {
    console.log('Async task is completed');
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log('Promise is resolved');
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task 2');
    resolve();
  }, 1000);
}).then(() => {
  console.log('Async 2 resolved');
});
