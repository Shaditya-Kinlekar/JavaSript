const clock = document.getElementById('clock');

// setInterval(function () {
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000);

/* 
This code displays a live updating clock on the page:
- It finds an element with ID "clock"
- Uses setInterval to run a function every 1 second (1000ms)
- Inside the function, it gets the current date/time
- It displays the time in the "clock" element's HTML
- Since the function runs every second, the time updates every second, giving a live clock effect.
*/

//  time in 12 hour format
setInterval(function () {
    let date = new Date();
    let options = { hour12: true };
    clock.innerHTML = date.toLocaleTimeString([], options);
}, 1000);
