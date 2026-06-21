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
    const arr = ["101", "90", "80", "32", "91"];
    arr.sort();
    console.log(arr); // ["101", "32", "80", "90", "91"] // comparison on the basis of ASCII value in 101 1 hota h 3 se chota h aur 8 se bada h isliye 101 pehle aata h
    arr.sort((a, b) => a - b);
    console.log(arr); // ["32", "80", "90", "91", "101"] // comparison on the basis of numeric valuemerrn 

