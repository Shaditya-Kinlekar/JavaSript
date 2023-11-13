const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasGoodVision);

// const shouldDrive = hasDriverLicense || hasGoodVision;
// write condition in if() than variable
// if (hasDriverLicense || hasGoodVision) {
//   console.log('Sarah is able to drive');
// } else {
//   console.log('Someone else should drive');
// }

const isTired = false;
console.log((hasDriverLicense && hasGoodVision) || isTired);

// whether sarah should drive if she  hasDriverLicense , hasGoodVision and !tired
if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}
