// * Creating a Promise, Chaining & Error Handling

const cart = [
  { orderID: 1, item: 'Apples', quantity: 3, price: 1.2 },
  { orderID: 2, item: 'Bread', quantity: 2, price: 2.5 },
  { orderID: 3, item: 'Milk', quantity: 1, price: 0.99 },
  { orderID: 4, item: 'Eggs', quantity: 12, price: 3.99 },
  { orderID: 5, item: 'Cheese', quantity: 1, price: 4.5 },
];

// basic eg:
//* Consumer part - consuming a promise
const promise = createOrder(cart); // returns orderID
// attaching the callback fn to promise object
promise
  .then(function (orderID) {
    // proceedToPayment(orderID);
    // ✅ success aka resolved promise
    console.log(orderID);
  })
  .catch(function (err) {
    // ⛔️ failure aka reject promise / gracefully handling error(showing custom error)
    console.log(err.message);
  });

//* Producer part - creating promise
function createOrder(cart) {
  // (resolve, reject) are given by javascript - by default designed in Promise api
  const pr = new Promise(function (resolve, reject) {
    // some logic: createOrder, validateCart, return orderID
    if (!validateCart(cart)) {
      // If cart not valid, reject the promise
      const err = new Error('Cart is not valid');
      reject(err);
    }
    //logic for createOrder
    const orderID = '12345'; // practically will get from a DB call
    if (orderID) {
      setTimeout(() => {
        resolve(orderID);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return false;
}
