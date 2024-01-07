// ? what is async?
// - async is a "keyword" which is used to write asynchronous functions

// syntax:
async function getData1() {
  //
}

/* 
* how is async fn different from a normal fn:
  1. always returns a promise
  2. if u dont return a promise but return a value(string, number, boolean, etc), then the value will be automatically wrapped inside a promise, and then return a "promise" but remember this fn will 'always return a promise'.
*/

const dataPromise = async function () {
  return 'Hello World!';
};

dataPromise().then((res) => console.log(res));
// same as
async function getData() {
  return 'Namaste';
}

const promiseResult = getData();
promiseResult.then((res) => console.log(res));

// basic promise eg:
const p = new Promise((resolve, reject) => {
  resolve('Promise resolved value');
});

async function getValue() {
  return p;
}

const getPromise = getValue();
getPromise.then((res) => console.log(res));
