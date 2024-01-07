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
const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved 1');
  }, 2000);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved 2');
  }, 5000);
});

async function test1() {
  console.log('deep dive promises');

  const result1 = await prom1;
  console.log('promise 1');
  console.log(result1);

  const result2 = await prom2;
  console.log('promise 2');
  console.log(result2);
}
test1();
