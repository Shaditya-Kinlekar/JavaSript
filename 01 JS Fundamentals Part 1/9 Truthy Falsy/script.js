console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('Jonas'));
console.log(Boolean(20));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(null));

let money = 0;
if (money) {
    console.log('You got money');
} else {
    console.log('get job');
}

// falsy values
false, 0, -0, BigInt, 0n, '', null, undefined, NaN;

// truthy values
'0', true, ' ', [], {}, function () {};

false == 0; // true
false == ''; // true
0 == ''; // true
