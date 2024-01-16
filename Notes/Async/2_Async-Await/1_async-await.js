// how we used to hanle promises before async/await
const promiseEg = new Promise((resolve, reject) => {
  resolve('Promise resolved');
});

// function getPromiseValue() {
//   promiseEg.then((res) => console.log(res));
// }
// getPromiseValue();

// ? how to use async await combo? how we handle the above using async/await
// async function handlePromise() {
//   const promiseResolution = await promiseEg;
//   console.log(promiseResolution);
// }
// handlePromise();

// * Notes:
// 1. await can only be used inside a async function
// 2. You write "await" infront of a promise and it resolves the promise i.e "const promiseResolution = await promiseEg"

// ** Deep dive into async/await
// ! difference between handling the promise using async/await and normal fn using .then on the promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Fake promise');
  }, 5000);
});

// // * 1. the below code was used before async/await and it was confusing for developers
// function handlePromWith_NormalFn() {
//   // JS Engine will not wait for the promise to be resolved
//   p.then((res) => console.log(res));
//   // the below log will be printed before the above promise
//   console.log('executes immediately');
// }
// handlePromWith_NormalFn();

// * 2.
// async function handlePromWith_AsyncAwait() {
//   // JS Engine pauses the execution util the promise is resolved
//   const result = await p;
//   console.log(result);
//   console.log('executes after promise resolves');
// }
// handlePromWith_AsyncAwait();

// ? what if we resolve the promise p twice in async/await
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Running the promise twice');
//   }, 8000);
// });
// async function promiseTwice() {
//   const result1 = await p2;
//   console.log('Hello1');
//   console.log(result1);

//   const result2 = await p2;
//   console.log('Hello2');
//   console.log(result2);
// }
// promiseTwice();
// summary:
// The first await will pause the execution until the promise p2 is resolved after 8 seconds.
// After the promise p2 is resolved, 'Hello1' and the result1 are logged.
// The second await encounters the "already resolved promise p2", so it returns the result immediately without any additional waiting.
// Then 'Hello2' and the result2 are logged.
// The total wait time is approximately 8 seconds, not 16, because the promise is resolved once and "both awaits receive the same resolved value".

// ? what if 2 promises take different time
// const prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise resolved 1');
//   }, 2000);
// });

// const prom2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise resolved 2');
//   }, 5000);
// });

// async function test1() {
//   console.log('deep dive promises');

//   const result1 = await prom1;
//   console.log('promise 1');
//   console.log(result1);

//   const result2 = await prom2;
//   console.log('promise 2');
//   console.log(result2);
// }
// test1();
/* 
Now, let's see how this works step by step:
1. When `test1()` is called, JS logs 'deep dive promises' to the console.
2. It then hits the `await prom1;` line. Since `prom1` takes 2 seconds to resolve, JavaScript doesn't wait for it to resolve. Instead, it moves on to the next line of code outside of `test1()`, effectively freeing up the call stack.
3. After 2 seconds, `prom1` resolves and its value ('Promise resolved 1') is assigned to `result1`. At this point, `test1()` is put back onto the call stack and continues executing from where it left off.
4. It logs 'promise 1' and the value of `result1` ('Promise resolved 1') to the console.
5. It then hits the `await prom2;` line. Similar to `prom1`, JavaScript doesn't wait for `prom2` to resolve. It moves on to the next line of code outside of `test1()`, freeing up the call stack.
6. After 5 seconds, `prom2` resolves and its value ('Promise resolved 2') is assigned to `result2`. `test1()` is put back onto the call stack and continues executing from where it left off.
7. It logs 'promise 2' and the value of `result2` ('Promise resolved 2') to the console.

So, even though `prom1` and `prom2` take different amounts of time to resolve, JavaScript handles them efficiently by moving other tasks onto the call stack while waiting for the promises to resolve. This is the power of asynchronous programming in JavaScript!
*/

//* Real World Example
/* 
? The fetch() function in JavaScript is used to make "HTTP requests". It returns a "Promise" that resolves to the 'Response object' representing the response to the request. 

Breakdown:
1. fetch(url): This initiates a network request to the specified URL and returns a Promise that resolves to a Response object.
2. Response.body: This is a ReadableStream that represents the body content of the response. It's a stream of data that can be read in chunks, allowing efficient handling of large amounts of data.
3. Response.json(): This method reads the body content and parses it as JSON. It returns another Promise that resolves with the resulting data.

  fetch() => Response.json() => jsonValue
*/

const API_URL = 'https://api.github.com/users/shaditya-kinlekar';

async function handlePromWith_Fetch() {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);
}
handlePromWith_Fetch();
/* code summary:
1. handlePromWith_Fetch() will be called and placed in the call stack.
2. JS moves to await fetch(API_URL) here it doesn't wait for the promise to resolve but suspends the execution and  handlePromWith_Fetch() moves out of the call stack, such that the call stack memory is freed up and some other code can run(since js is single threaded synchronous language),
3. After fetch(API_URL) is resolved  handlePromWith_Fetch() comes again in the call stack and starts to execute the code, response object is stored in data and it now moves to await data.json() which again returns a promise so it moves out of the call stack
4. after the promise is resolved and json data is parsed from the readbale stream of the response object, the data is stored in jsonValue.
5. jsonValue is logged in the console and the function finishes executing and is removed from the call stack
*/

//* Error handling
// modern way to handle errors
const API_URL2 = 'https://example.api.com';
async function errorHandling() {
  try {
    // If the fetch fails (due to reasons like network issues, invalid URL, etc.),
    // JavaScript won't move to the next line and control will go to the catch block
    const res = await fetch(API_URL2);

    // Try to parse the response as JSON
    // If there's an error during parsing (like if the response isn't valid JSON),
    // JavaScript won't move to the next line and control will go to the catch block
    const jsonValue = await res.json();
    console.log(jsonValue);
  } catch (err) {
    // If there's an error during the fetch or parsing, it's caught here
    // This could be due to reasons like network issues, invalid URL, invalid JSON, etc.
    console.log(err);
  }
}
errorHandling();

// older way to handle errors
errorHandling().catch((err) => console.log(err));
// since errorHandling() returns a promise(async is used which always returns a promise)

// * if an async function returns a value, that value is wrapped in a Promise.
async function foo() {
  return 'Hello, world!';
}

console.log(foo()); // Promise {<fulfilled>: "Hello, world!"}
foo().then(console.log); // "Hello, world!"
