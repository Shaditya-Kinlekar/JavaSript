const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    let finalArr = [];
    for (let i = 0; i < arr.length; i++) {
        finalArr.push(`...${arr[i]}°C in ${i + 1} days`);
    }
    return finalArr.join();
};
console.log(printForecast(test2));

// 2 soln
const forecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}°C in ${i + 1} days...`;
    }
    console.log(str);
};
forecast(test2);
