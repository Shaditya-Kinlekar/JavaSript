const GITHUB_API = 'https://api.github.com/users/Shaditya-Kinlekar';

const user = fetch(GITHUB_API);
console.log(user);

/*  Note:
The fetch() function in JavaScript returns a Promise. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

When you call fetch(), it starts the process of fetching a resource from the network, which is an asynchronous operation. This is why you see "Promise {<pending>}" when you log the user variable to the console immediately after calling fetch(). At this point, the Promise is still in the “pending” state because the operation hasn’t completed yet.

When the operation completes, the Promise changes from the “pending” state to the “fulfilled” state, which you see when you expand the Promise in the console. The “fulfilled” state means that the operation completed successfully. 
!Actually this behaviour is a inconsistency in chromium browsers.
*/

// Now how we can attach callback to above response?
//* using .then
user.then(function (data) {
  console.log(data);
});
/*  And this is how Promise is used.
  Promises guarantees that the promise/callback could be resolved only once, either it could be `success` or `failure`
 * 3 states of Promise: 
  1. pending - initial state, neither fulfilled nor rejected.
  2. fulfilled - operation completed
  3. rejected - operation failed 

  ? 💡Promise Object are immutable.
  -> Once promise is fulfilled and we have data we can pass it in any fn and use it anywhere and we don't have to worry that someone can mutate that data. So over above we can't directly mutate user promise object, we will have to use .then

  ? What is a Promise?
  -> A Promise is an object representing the eventual completion or failure of an asynchronous operation.
*/

//* the above code solves the issue of depending on just 1 function i.e Inversion of Control.(@1_Promises_intro.md)

/*  💡 to fix the issue of callback hell:
- code is expanding horizontally and this is called pyramid of doom.
- Callback hell is ugly and hard to maintain. */
// hypothethical eg:
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInf) {
    showOrderSummary(paymentInf, function (balance) {
      updateWalletBalance(balance);
    });
  });
});

// 💡 Promise fixes the above issue too using `Promise Chaining`
createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    showOrderSummary(paymentInfo);
  })
  .then(function (balance) {
    updateWalletBalance(balance);
  });

// !! Common PitFall
// We forget to return promise in Promise Chaining
// The idea is promise/data is returned from one ".then" becomes data for next ".then"
// So,
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (balance) {
    return updateWalletBalance(balance);
  });

// To improve readability you can use arrow function instead of regular function
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((balance) => updateWalletBalance(balance));
