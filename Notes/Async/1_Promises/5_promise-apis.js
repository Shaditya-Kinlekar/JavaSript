/* 
Promise.all(): Takes an array/iterable of promises and returns a new promise that resolves when all input promises are resolved. returns the error if the first input promise is rejected.

Promise.allSettled(): Takes an array/iterable of promises and returns a new promise that resolves with an array of objects representing the outcomes of each promise.

Promise.race(): Takes an array/iterable of promises and returns a new promise that resolves or rejects as soon as any input promise does.

Promise.any(): Takes an array/iterable of promises and returns a new promise that resolves with the value of the first resolved promise. Rejects if all input promises are rejected and returns an aggregated error.
*/

// ! Note:
//* Setteled - got the result
//*  - resolve/reject,  - success/failure,   - fulfilled/rejected

// dummy promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 success');
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('p2 success');
    reject('p2 failed');
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 success');
  }, 3000);
});
const startTime = Date.now();

function executionTime() {
  const endTime = Date.now();
  const executionTime = (endTime - startTime) / 1000; // Convert milliseconds to seconds
  console.log(`Total execution time: ${executionTime} seconds`);
}

//!  important to do catch(best practise) otherwise will get a uncaught error

//*  Promise.allSettled([p1, p2. p3]) -> o/p:  [{}, {}, {}] array of objects
/* o/p : [0: {"status": "fulfilled", "value": "p1 success"},
    1: {"status": "rejected", "reason": "p2 failed"},
    2: {"status": "fulfilled", "value": "p3 success"}] */

//* Promise.race() ->  will return the value of the "first" setteled promise whether it is resolved/success or rejected/failure

//* Promise.any()
// o/p: resolved value of the first promise or
//  Aggregated error: All promises were rejected -> if all promises fail
// to get the list/array of errors -> console.log(error.errors); // ['', '', ''],

function PromiseType(type) {
  Promise[type]([p1, p2, p3])
    .then((res) => {
      console.log(`Promise.${type}`);
      console.log(res);
      executionTime();
    })
    .catch((error) => {
      console.log(`Promise.${type}`);
      console.error(error);
      executionTime();
    });
}

PromiseType('all');
// PromiseType('allSettled');
// PromiseType('race');
// PromiseType('any');
