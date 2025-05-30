let userName:string; // userName = "John"; // valid assignment
let userAge:number; // userAge = 25; // valid assignment
let userIsDead:boolean; // userIsDead = false; // valid assignment
let user: string[] = []; // user.push(123); // type error: user should be an array of strings

//union type
let userId: string | number; // can be either string or number
let userInfo: (string | number | boolean)[] = []; // can be an array of string, number, or boolean
let userDetails: {
    name: string,
    age: number,
    isDead: boolean
};