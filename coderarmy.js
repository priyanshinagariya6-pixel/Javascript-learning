// console.log("Hello, World!");
// const id1 = Symbol("id");
// console.log(id1);
// const id2 = Symbol("id");
// console.log(id2);
// console.log(id1 === id2); // false  

// function ko variable ke andar store kara skte h
// let s = function add(){
//     console.log("Hello, World!");
// }
// console.log(s());
// s();
/// use console.log(typeof s);

//// null ke type ko null nhi dikhata h, null ka type object hota h
// let a = null;
// console.log(typeof a); // object
// this is a bug in JavaScript, but it has been kept for backward compatibility reasons.
//in javascript all the non-primitive data types are objects, and null is considered a non-primitive data type, so it is classified as an object.
// primitive data types are immutable
/// this will not change the string because strings are immutable
// console.log(str); // Hello  

// non primitive data types are mutable
// let arr = [1, 2, 3];
// arr[0] = 0;
// console.log(arr); // [0, 2, 3]

// let obj = {name: "John", age: 30};
// obj.name = "Doe";
// console.log(obj); // {name: "Doe", age: 30}     
//object copy by reference and primitive data types copy by value

/////MEMORY MANAGEMENT ////////////

///CPU -> RAM -> Cache -> Registers// RAM BYTE ADRESSABLE MEMORY HOTI H EK VARIABLE A=24 H OR B=30 H AGR A KO 20 KAR DIYA B KO BHI 20 NEXT AGR A 
/// KO CHANGE KARUNGI TO PATA KESE VHALEGA KONSE 20 KO CHANGE KARNA H
// NUMBER AND STRING ==ME SAME HOTE H ==== ME DIFFERENT HOTE H

// computer science problem
// let a = 0.1 + 0.2;
// console.log(a); // 0.30000000000000004
// this is because of the way floating-point numbers are represented in binary.
// to solve this problem we can use toFixed() method
// let b = (0.1 + 0.2).toFixed(2);
// console.log(b); // 0.30 or consider 0.1 and 0.2 strings instead of numbers
// let c = parseFloat("0.1") + parseFloat("0.2");
// console.log(c); // 0.3


/////////// NUMBER ///////////////////////////

// let a = new Number(20);
// let b = 20 ;
// console.log ( a);


/////    M           A          t   H    //////////////////////////////th
// console.log(Math.abs(-20)); // 20
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.8)); // 4
// console.log(Math.round(4.5)); // 5
// console.log(Math.max(1, 2, 3));
// console.log(Math.min(1, 2, 3));
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.sqrt(16));
// console.log(Math.random()); // random number between 0 and 1 //
// console.log(Math.PI); // 3.141592653589793

// satebajii ek game banate h (0-9)

// console.log(Math.floor(Math.random() * 10)+1); // random number between 1 and 10
/// 15-25
// console.log(Math.floor(Math.random() * 11) + 15); // random number between 15 and 25
//math.floor(Math.random() * (max - min + 1)) + min; // random number between min and max






/// otp generate 4 digit : 1000 -9999
// console.log(Math.floor(Math.random() * 9000) + 1000); // random number between 1000 and 9999
// but it is not a good way to generate otp because it can generate duplicate numbers, so we can use a set to store the numbers and check if the number is already present in the set or not
//we use crypto module to generate otp because it is more secure than Math.random() and it can generate unique numbers
// generate otp using crypto module
// console.log("Generating OTP using crypto module");
// const crypto = require("crypto");

// const otp = crypto.randomInt(1000, 10000);
// console.log(otp);

/// input me time dena means seed dena



///////// string //////////////////
// const str = "Hello, World!";
// const str1=`Hello,

//  World!`; 
//  const rt = 18;
//  const str3 = `strick is comming on ${rt}`; 
//  console.log(str3);// template literal
// console.log(str.length); // 13
// console.log(str.toUpperCase()); // "HELLO, WORLD!"
// console.log(str.toLowerCase()); // "hello, world!"
// console.log(str.includes("World")); // true
// console.log(str.startsWith("Hello")); // true
// console.log(str.endsWith("!")); // true
// console.log(str.indexOf("o")); // 4continuous string  hel hoga to 
// console.log(str.lastIndexOf("o")); // 8

// console.log(str.slice(0, 5)); // "Hello" last index is not included
// console.log(str.substring(0, 5)); // "Hello"
// console.log(str.substr(0, 5)); // "Hello"

// console.log(str.split(", ")); // ["Hello", "World!"]// string ko array me convert kar deta h
// console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
// console.log(str.repeat(2)); // "Hello, World!Hello, World!"
// console.log(str.trim()); // "Hello, World!"
// console.log(str.charAt(0)); // "H"
// console.log(str.charCodeAt(0)); // 72    
//console.log(str[0]); // "H"
/// subsring and slice are same but substr is different because it takes length as second parameter 
// and in substing negative index is not allowed but in slice negative index is allowed
//example
// const str = "Hello, World!";
// console.log(str.slice(-6, -1)); // "World"
// console.log(str.substring(-6, -1)); // ""
// console.log(str.substr(-6, 5)); // "World"
//concatination of string
// const str1 = "Hello";
// const str2 = "World";
// console.log(str1 + ", " + str2 + "!"); // "Hello, World!"
// console.log(`${str1}, ${str2}!`); // "Hello, World!" template literal
/// use of trim() method to remove white spaces from the start and end of the string
// const str = "   Hello, World!   ";
// console.log(str.trim()); // "Hello, World!"// start and end of the string



////////////////// D   A    T   E  ////////////////////////
// const date = new Date();//javascript ko pata kese chal raha h ki abhi kaunsa time h, ye system ke time ke hisab se chal raha h
// system ke time ke hisab se chal raha h means agar system me time change kar diya to date object bhi change ho jayega javas


// console.log(date); // current date and time time utc me dikkha raha h universal time constant se 5.5 ghante piche h india ka time
// console.log(date.toLocaleString());// current date and time in local time zone
// console.log(date.toString()); // current date in local time zone
// console.log(date.getFullYear()); // 2023
// console.log(date.getMonth()); // 0 (January)
// console.log(date.getDate()); // 1
// console.log(date.getHours()); // 0
// console.log(date.getMinutes()); // 0
// console.log(date.getSeconds()); // 0
// console.log(now.Date()); // current date in local time zone
// console.log(now.getTime()); // current time in milliseconds since January 1, 1970
// console.log(now.getTimezoneOffset()); // time zone offset in minutes
// console.log(now.getDay()); // day of the week (0-6) 0 is Sunday and 6 is Saturday
// console.log(now.getMonth()); // month (0-11) 0 is January and 11 is December
// const now = new Date(2026,8,20,8,25,16,125);
//year, month, date, hours, minutes, seconds, milliseconds
// console.log(now); // 2026-09-20T02:55:16.125Z
// console.log(now.toString()); // "Sun Sep 20 2026 08:25:16 GMT+0530 (India Standard Time)"

// data bala 


//// a rr ay  ///////////////////////////////////////////
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length); // 5
// console.log(arr[0]); // 1    
// console.log(arr[arr.length - 1]); // 5
// console.log(arr.push(6)); // 6

// console.log(arr); // [1, 2, 3, 4, 5, 6]
// console.log(arr.pop()); // 6
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(arr.shift()); // 1
// console.log(arr); // [2, 3, 4, 5]    
// console.log(arr.unshift(0)); // 5

// console.log(arr); // [0, 2, 3, 4, 5]

// console.log(arr.indexOf(3)); // 2
// console.log(arr.includes(3)); // true



/////////////// spread operator //////////////////////////
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3); // [1, 2, 3, 4, 5, 6]
// const arr4 = [...arr1];
// console.log(arr4); // [1, 2, 3] // copy of arr1  
// const arr5 = [...arr1, 4, 5, 6];
// console.log(arr5); // [1, 2, 3, 4, 5, 6]
// const arr6 = [0, ...arr1, 4, 5, 6];
// console.log(arr6); // [0, 1, 2, 3, 4, 5, 6]
//const arr7 = [arr1, arr2];
//console.log(arr7); // [[1, 2, 3], [4, 5, 6]] // nested array

//const names = ["Alice", "Bob", "Charlie", "Alice"];
//console.log(typeof names.toString()); // "Alice,Bob,Charlie" // string new string banata h
//console.log(typeof names.join(", ")); // "Alice, Bob, Charlie" // string new string banata h
//console.log(names.indexOf("Bob")); // 1
//.log(names.includes("Bob")); // true   
//console.log(names.lastIndexOf("Alice")); // 3
// console.log(names.sort()); // ["Alice", "Alice", "Bob", "Charlie"] comparison on the basis of ASCII value
// console.log(names.reverse()); // ["Charlie", "Bob", "Alice", "Alice"] // reverse the array
// console.log(names.slice(1, 3)); // ["Bob", "Charlie"] // last index is not included
// console.log(names.splice(1, 2)); // ["Bob", "Charlie"] // last index is included and it modifies the original array
// console.log(names); // ["Alice", "Alice"] // modified array after splice 
// console.log(names.concat(["Dave", "Eve"])); // ["Alice", "Alice", "Dave", "Eve"] // new array banata h
// console.log(names); // ["Alice", "Alice"] // original array is not modified
    // const arr = ["101", "90", "80", "32", "91"];
    // arr.sort();
    // console.log(arr); // ["101", "32", "80", "90", "91"] // comparison on the basis of ASCII value in 101 1 hota h 3 se chota h aur 8 se bada h isliye 101 pehle aata h
    // arr.sort((a, b) => a - b);
    // console.log(arr); // ["32", "80", "90", "91", "101"] // comparison on the basis of numeric valuemerrn 

/////////////     O B J E C T S  //////////////////////////
// object ke andar key value pair hota h, key string hota h aur value kisi bhi type ka ho skta h
// const obj = {name: "John", age: 30, isStudent: true};
// console.log(obj.name); // "John"
// console.log(obj["age"]); // 30
// obj.name = "Doe";
// console.log(obj.name); // "Doe"  
// obj.addhar = "1234-5678-9012";
// console.log(obj.addhar); // "1234-5678-9012"
// delete obj.age;
//user.age = 31; // update the value of age property
// console.log(obj.age); // 31
// console.log(obj); // {name: "Doe", isStudent: true, addhar: "1234-5678-9012"} 
//delete obj.isStudent; // delete the isStudent property

//const user2 = user ;
//user2.name = "Alice"; // update the value of name property
//console.log(user.name); // "Alice" // user object is modified because user2 is a reference to the same object in memory
//console.log(user2.name); // "Alice" // user2 object is modified because user is a reference to the same object in memory
//console.log(object.keys(user)); // ["name", "age", "isStudent", "addhar"] // returns an array of keys
//  
//      console.log(object.values(user)); // ["Alice", 31, true, "1234-5678-9012"] // returns an array of values
//      console.log(object.entries(user)); // [["name", "Alice"], ["age", 31], ["isStudent", true], ["addhar", "1234-5678-9012"]] // returns an array of key value pairs    
 // for(let keys in user){
//     console.log(keys); }// name age isStudent addhar // returns the keys of the object
// for(let keys in user){
//     console.log(user[keys]); }// Alice 31 true 1234-5678-9012 // returns the values of the object

//for(let keys in user){
//     console.log(keys,user.keys); }// name Alice age 31 isStudent true addhar 1234-5678-9012 // returns the keys and values of the object
//not a good practice to use for in loop to iterate over the object because it will also iterate over the inherited properties of the object, so it is better to use Object.keys() or Object.values() or Object.entries() to iterate over the object

// const user = {name: "John", age: 30, isStudent: true};
// const name = user.name ;
// const age = user.age ;
//console.log(name, age); // "John", 30
// const {name, age} = user; // object destructuring
// console.log(name, age); // "John", 30
// const {name: userName, age: userAge} = user; // object destructuring with alias means name ko userName aur age ko userAge ke naam se destructure karna
// console.log(userName, userAge); // "John", 30    
// const arr = [1, 2, 3];
// const [a, b, c] = arr; // array destructuring
// console.log(a, b, c); // 1, 2, 3
// const [x, y] = arr; // array destructuring with less variables than elements in the array
// console.log(x, y); // 1, 2

// object ke uppar for of loop direct nhi chala skte h kyuki array ke andar index hota h aur for of loop index ko ignore karta h
//array ke uppar for of loop chalta h kyuki array ke andar index hota h aur for of loop index ko ignore karta h
// for(let value of arr){
//     console.log(value); // 1, 2, 3 // returns the values of the array
// }

//for(let keys of Object.keys(user)){
//     console.log(keys); // name, age, isStudent // returns the keys of the object}
 //const temparr = Object.keys(user);
 //for(let keys of temparr){
//     console.log(keys); // name, age, isStudent // returns the keys of the object
// }
// for(let values of Object.values(user)){
//     console.log(values);// "John", 30, true // returns the values of the object
// }
//for(let value of Object.entries(user)){
//     console.log(value); // ["name", "John"], ["age", 30], ["isStudent", true] // returns the key value pairs of the object


//console.log(a); // undefined
//var a = 5;

// console.log(b); // Error
//let b = 5;

//console.log(c); // Error
//const c = 5;



//console.log(a);
// var a = 10;




//var a;        // memory me undefined assign hua

//console.log(a); // undefined

// a = 10;




//console.log(x);
// let x = 10;

// let x; // memory me hai, lekin inaccessible
// console.log(x); // Error
// x = 10;

// console.log(y);
// const y = 20;

//TDZ (Temporal Dead Zone) woh time period hota
//  hai jab ek let ya const variable memory me to create ho chuka hota hai,
//  lekin abhi initialize nahi hua hota. Is period me agar
//  aap variable ko access karte ho, to ReferenceError aata hai.

// const person = {
//     name: "Priyanshi",
//     age: 20,

//     getAge: function () {
//         return this.age;
//     }
// };

// console.log(person.getAge());//20
// const person = {
//     name: "Priyanshi",
//     age: 20,

//     getAge: function () {
//         return this.age;
//     }
// };

// console.log(person.getAge());


// function createUser(name, age) {
//    

// return vs console.log



// const obj = {
//     show() {
//         console.log("Hello");
//     }
// };

// console.log(obj.show()); // hello or under\fine kyuki function kuch return nhi kar raha h



//const obj = {
    // show() {
//         return "Hello";
//     }
// };

// console.log(obj.show()); ab only hello

//Jab hum ek function ko kisi variable me store karte hain, use Function Expression kehte hain.

// const greet = function () {
//     console.log("Hello");
// };

// greet();




/// //////////////// FUNCTION DECLARATION//////////////////////////////////

// function greet() {
//     console.log("Hello");
// }

// greet();


// Parameters and Arguments in JavaScript

// Bahut students parameter aur argument ko same samajhte hain, lekin dono alag hote hain.

// Parameter → Function definition ke andar likhe variables.
// Argument → Function call karte waqt pass ki hui values.
// Example
// function add(a, b) {
//     return a + b;
// }

// add(10, 20);

// Yahan:

// a aur b → Parameters
// 10 aur 20 → ArgumentsExample 1: Single Parameter
// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Priyanshi");
// name → Parameter
// "Priyanshi" → Argument

// Output:

// Hello Priyanshi
// Example 2: Multiple Parameters
// function multiply(x, y) {
//     return x * y;
// }

// console.log(multiply(5, 4));
// x, y → Parameters
// 5, 4 → Arguments

// Output:

// 20
// Default Parameters
// function greet(name = "Guest") {
//     console.log(name);
// }

// greet();
// greet("Priyanshi");

// Output:

// Guest
// Priyanshi

// Yahan agar argument pass nahi hota to default value use hoti hai.

// Missing Arguments
// function add(a, b) {
//     console.log(a);
//     console.log(b);
// }

// add(10);

// Output:

// 10
// undefined

// Kyun?

// a = 10
// b = undefined
// Extra Arguments
// function add(a, b) {
//     return a + b;
// }

// console.log(add(10, 20, 30, 40));

// Output:

// 30

// Extra arguments ignore ho jate hain.

// Rest Parameters

// Jab hume nahi pata kitne arguments aayenge.

// function sum(...numbers) {
//     let total = 0;

//     for (let num of numbers) {
//         total += num;
//     }

//     return total;
// }

// console.log(sum(10, 20, 30, 40));

// Output:

// 100

// ...numbers saare arguments ko array me collect kar leta hai.

// Pass by Value

 console.log(priyanshi)