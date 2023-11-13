// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

const a = 5;
const b = 6;
const c = 7;

function areaTriangle(a, b, c) {
    const s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area.toFixed(2);
}

console.log(`Area of Triangle: ${areaTriangle(a, b, c)} square units`);

