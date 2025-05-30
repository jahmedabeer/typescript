let myFun: Function;

myFun = () => {
    return "Hello, World!";
}

console.log(myFun());

const add = (a: number, b: number, c?: string) : number => { // Function with optional parameter
    if(c === 'ok') console.log("Adding numbers: " + a + " and " + b);
    return a + b;
}
add(3, 4); // retrun number