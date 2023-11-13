'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
//* without strict mode it will create a separate global variable

const private = 389;
//* gives error if using words reserved by js for future features

/* 
- It helps catch common coding mistakes and prevents accidental global variables.
- It disables some confusing or deprecated JavaScript features.
- It improves performance in some cases by enabling certain optimizations.
- It encourages writing cleaner and more maintainable code.
*/

