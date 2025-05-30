"use strict";
let myFun;
myFun = () => {
    return "Hello, World!";
};
console.log(myFun());
const add = (a, b, c) => {
    if (c === 'ok')
        console.log("Adding numbers: " + a + " and " + b);
    return a + b;
};
add(3, 4); // retrun number
