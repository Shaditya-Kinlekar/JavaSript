//* Blocking the main thread

console.log('start');

setTimeout(() => {
    console.log('Callback');
}, 5000);

console.log('end');

let startTime = new Date().getTime();
let currTime = startTime;

while (currTime < startTime + 10000) {
    currTime = new Date().getTime();
}

console.log('while expires');

/* 
- First GEC is created and pushed in callstack.
- Start is printed in console
- When setTimeout is seen, callback function is registered into webapi's env. And timer is attached to it and started. callback waits for its turn to be execeuted once timer expires. But JS waits for none. Goes to next line.
- End is printed in console.
- After "End", we have 1 million lines of code that takes 10 sec(say) to finish execution. So GEC won't pop out of stack. It runs all the code for 10 sec.
- But in the background, the timer runs for 5s. While callstack runs the 1M line of code, this timer has already expired and callback fun has been pushed to Callback queue and waiting to pushed to callstack to get executed.
- Event loop keeps checking if callstack is empty or not. But here GEC is still in stack so cb can't be popped from callback Queue and pushed to CallStack. Though setTimeout is only for 5s, it waits for 10s until callstack is empty before it can execute (When GEC popped after 10sec, callstack() is pushed into call stack and immediately executed (Whatever is pushed to callstack is executed instantly).
- This is called as the "Concurrency model" of JS. This is the logic behind setTimeout's trust issues.
- The First rule of JavaScript: Do not block the main thread (as JS is a single threaded(only 1 callstack) language).
*/
