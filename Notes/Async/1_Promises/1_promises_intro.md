# Hypothetical Example: Shopping Cart

Suppose we had a cart:

```javascript
const cart = [
  { orderID: 1, item: 'Apples', quantity: 3, price: 1.2 },
  { orderID: 2, item: 'Bread', quantity: 2, price: 2.5 },
  { orderID: 3, item: 'Milk', quantity: 1, price: 0.99 },
  { orderID: 4, item: 'Eggs', quantity: 12, price: 3.99 },
  { orderID: 5, item: 'Cheese', quantity: 1, price: 4.5 },
];
```

Suppose we had an API/method to create the order and get the orderID:

```javascript
createOrder(cart); // returns orderDetails
```

And another method which proceeds to payment with the orderID:

```javascript
proceedtoPayment(orderDetails.orderID);
```

Here both methods are depended on each other since we can only proceed to payment if the order is created.

## Handling this situation using Callback - earlier approach

Before promises we used to depend on callback functions

```javascript
createOrder(cart, function (orderDetails) {
    // some logic that returns orderID
  proceedtoPayment(orderDetails.orderID);
});
```

Now it's the responsibility of the `createOrder` function to create the order and `proceedtoPayment` once the order is created. This is how async functions are handled using callbacks!

> **But there is an issue? The issue is "Inversion of Control"**

We are passing the callback function (`proceedtoPayment`) to `createOrder` and giving it the responsibility to handle the callback function and waiting, that sometime `createOrder` will call the `proceedtoPayment` function and everything will work fine. But what if it never calls the callback function or it calls it twice, anything can happen, so we can't completely trust the API/method (IoC).

## Solving this using Promises - modern approach

We'll design the API/method in such a way that it won't take a callback function but just take in cart and return a "promise" which we will store in a variable:

```javascript
const promise = createOrder(cart);
```

Assume promise to be an empty object with some value in it `{data : undefined}`. Note that `createOrder` is an `async operation`, so we don't know how much time it will take to execute, so for the moment consider the data to be undefined(empty value) and whenever JS executes `const promise = createOrder(cart)`, it will return a promise(consider it to be an empty value) and the code will continue to run (if there were more code after declaring "promise") and after 5/6 sec(whatever time it takes), now the "promise" object will be filled automatically. `{data : orderDetails }`.

**What will happen to `proceedtoPayment`?**

We will attach it to promise object as a callback function using ".then":

```javascript
promise.then(function (orderDetails) {
  // some logic that returns orderID
  proceedtoPayment(orderDetails.orderID);
});
```

So, as soon as JS engine executes `const promise = createOrder(cart)`, and returns a `promise object` which is `empty(undefined)` at the moment, but "after certain time" it will be filled with `orderDetails` (actual value) which will be returned by `createOrder` API(method) -> (`{data : orderDetails}`).

And once we have data in the promise object, the callback function which we attached to promise object `promise.then(...)` will be automatically called i.e (`proceedtoPayment()`).

## ` But how is the use of promises better than the callback code since we still are using callbacks inside promises?`

What we did in earlier solution(1), we passed `proceedtoPayment` as callback to `createOrder` API/method and we were blindly trusting `createOrder` API and relying on it.

And in solution 2, we are attaching the callback function to the promise object. There is a difference:

- In 1 -> "we were passing a callback function to a function" .... in this case, `createOrder` will call the callback function whenever it wants to.
- In 2 -> "we are attaching a callback function to a promise object" .... in this case, we will have the control of the program with us. How? - the `createOrder` will create an order and fill the data in the promise object whenever it wants to, and as soon as the promise object is filled with that data it will automatically call our callback function(`proceedtoPayment`) and we will have the Control of our program with us. Promises gives us this "Trust"... It gives this guarantee that it will call(only once!!) this callback function whenever there is data in the promise object(`{data:orderDetails}`) and hence `proceedtoPayment` with `orderID`.

<br><br>
reference blog: https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/
