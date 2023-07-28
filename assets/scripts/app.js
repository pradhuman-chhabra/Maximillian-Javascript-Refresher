// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import { apiKey, abc as content } from "./util.js";
// import * as util from "./util.js";

// console.log(util.apiKey);
// console.log(content);

// const userMessage = "Hello World!!!";
// const can not be redeclared and reassigned

// console.log(userMessage);
// console.log(userMessage);

// if (10 === 10) {
// console.log("its true");
// }

// Function refresher

// function createGreeting(userName, message = "Hello!") {
//   // hello is the default value for a parameter in case it isn;t passed then default value will be used
//   console.log(userName);
//   console.log(message);
//   return "Hi, I am " + userName + ". " + message;
//   // we can return values from the functions so since they are returning the values we have to recieve these values in some continers i.e variables, console.log does not require the use of variables as it prints in the console
// }

// const greeting1 = createGreeting("Max");
// console.log(greeting1);

// const greeting2 = createGreeting("Manuel", "Hello, what's up?");
// console.log(greeting2);

// This is an arrow fucntion its also called anonymous function which don't have a name

// export default (userName, message) => {
//  console.log("Hello");
//   return userName + message;
// };

// anonymous function can also be defined like this
// export default function () {
//   console.log("hello world");
// }
// but for the ease of writing we can use arrow funtion
// export default (weWriteTheParametersHere)=>{
// console.log("hello world")
// }

// Javascript objects

const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello!");
    console.log(this.age);
    // we can acces the values of this object using the this keyword like this.age
  },
};
// we can put functions inside the objects as a key

console.log(user.name);
user.greet();
// this will acces the function that is inside the object

/*

With the class keyword,you can create a blueprint that can then later be used to create the actual objects.

Here we could create a blueprint called "User," like this,  

And then here you could, for example, add your methods or functions as you would call them, that should be part of that blueprint, like this.

greet() {
  console.log("Hi!");
}

In addition, you can add a so-called constructor function by using the special constructor keyword, 
you can use this constructor for accepting parameters, input values, like name and age, for example,
and then store them in properties of the object that will be created based on the class
with help of the this (this.name = name; this.age = age;) keyword again. 
So that's how I would create properties named "name" and "age"
and store the parameter values "name" and "age" in these properties.

 */
// Class names should start with a capital case character.

// Class Keyword

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();
// user1.greet will print hi in the console

// Arrays and array methods

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

/*
For this, findIndex actually takes a function as an input, and that's a great use case for using such a arrow function,

since it's super short to write and not a lot of characters to type.

This arrow function, which you pass to findIndex should accept at least one input parameter,

which could be called item, because findIndex behind the scenes will execute this function,

which you're passing to findIndex, and will automatically provide a value

for this input parameter. Therefore, of course, your function also must accept it

in order to then use it in this function body. Now, in this function body, in case of findIndex,

you then should return true if you have the item that you were looking for, and false otherwise.

For that, we can return item === 'Sports', For example, if we were looking for the index of the item Sports.

So if we were looking for the index of this item. What this code here does is

it executes this function automatically behind the scenes for every item in this array, including this Working item,

which was pushed onto the array. And then for every item, it compares that item.

So that text here to this text, with help of this comparison operator,which I mentioned before.

If the two are equal, this function here returns true, and therefore findIndex knows

that I found the item I was looking for,and it will then give me the index of that item.

Otherwise, this will return false, and findIndex will do nothing.

So, therefore, here I could store that index in a constant and then console.log it.


*/

// This is used to find the index of a value inside an array , it accepts function as an input so using an arrow function is ideal for it
// This arrow function, which you pass to findIndex should accept at least one input parameter, which could be called item,
// because findIndex behind the scenes will execute this function, which you're passing to findIndex, and will automatically provide a value for this input parameter.

// What this code here does is it executes this function automatically behind the scenes for every item in this array, including this Working item, which was pushed onto the array. And then for every item, it compares that item. So that text here to this text, with help of this comparison operator, which I mentioned before. If the two are equal, this function here returns true,

/* Find index runs for every value inside the arraya and , all that's happening here is that findIndex needs a function (The arrow function) , which it can execute on our behalf, and it will execute this function for every item in this array.

It will pass that item for every execution into that function. And, therefore, of course, item will be different

for every execution.

It will be those items here. for example sports ,cooking , reading or working And then we compare the item we're getting to some value we are looking for. So this value we're looking for, of course, is defined by us, the developer.
i.e sports its befined by us ,That's how this function here works.*/

/*
  Written by yours truely
  An arrow function is just a function at the end of the day it takes up a value as input/parameter/argument in the brackets (item) it has a function body enclosed in curly braces and it returns a value {return item === "Sports"}
  Since findIndex returns an index then we have to store the index in some variable so that's why we have const index
  what this function does ,it returns the index so it runs for every value of the array and it takes up a fucntion as an argument so its a function inside a function ithe inside function recieves the elements of the array as arguments and then the funcion body runs which returns true or false it it matches the value entered by the programmer , i.e us 
*/

// const index = hobbies.findIndex((item) =>
// item === "Sports");

// const index = hobbies.findIndex((item) => {
//   return item === "Sports";
// });
// we can get rid if this return statement if you want

// console.log(index);

// Map function

/*
Map allows you to transform every item in an array to another item.

Just like findIndex, map function takes a function as an input, typically such an arrow function , it runs for every value of the array and it then takes the array values and passes it to the function inside it i.e th arrow function ,the arrow function here also will receive every item in the array as an input 

because this function also will be executed automatically by map for every item in the array, and every item off the array will then be provided as an input value to this function when it's being executed.

And then here you return the value , as an arrow function is also a function so it has a function body inside the curly braces and it will return a value 

this item should be transformed to, For example, item + "!".

So that I add an exclamation mark to every string here.

You'll use this map method a lot for outputting list content, for mapping data into such JSX elements, Here I'm just mapping my items to strings with an exclamation mark at the end.

Note:

And what map will do is it'll not edit the original array. Instead, that array will stay unchanged. And instead, map will return a new array, which the programmer has named editedHobbies,that's why we need to make a new variable to store the new formed array
const editedHobbies = hobbies.map((item) => ({ text: item }));

So that's what map does. */

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// const [firstName, lastName] = ["Max", "Schwarzmüller"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Max",
//   age: 34
// };

// console.log(userName);
// console.log(age);

// const name = user.name;
// const age = user.age;

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Max",
//   age: 34
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user
// };
// console.log(extendedUser);

// const password = prompt("Your password");

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out ... again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);

// function init() {
//   function greet() {
//     console.log(“Hi!“);
//   }

//   greet();
// }

// init();

// const message = “Hello”;

// const hobbies = ["Sports", "Cooking"];
// // hobbies = [];
// hobbies.push("Working");
// console.log(hobbies);
