// var a=document.getElementById("d1");
// var b=document.getElementById("p1");
// var c=document.getElementById("d2");
// var d=document.getElementById("p2");
// //syntax: element.addEventListener(event,function,usecapture)
// //syntax:element.removeEventListener(event,function,usecapture)
// a.addEventListener("click",i,true);
// a.addEventListener("click",j,true);
// let answer;
// function i(){
//     c.style.backgroundColor="yellow";
//     answer=d.textContent+=" Hello";

// }
// function j(){
//     d.textContent= answer+" Welcome";
// }

// declarations and data types:

// const name="vinu";
// const age=20;
// const h=null;
// const b = true;
// const x = undefined;
// let z;

// console.log(typeof z);

//Strings
const name = "vinu";
const age = 20;

//Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template Strings
// const hello = 'My name is ${name} and I am ${age}';
// console.log(hello);

//Lenght of a string , Uppercase,lowercase,substring, split
const s = 'vinudharshini';
// console.log(s.substring(0,4).toUpperCase());
console.log(s.split(''));   //will split like array 
const p = 'technology, it, lamp, java';
console.log(p.split(', '));

//Arrays
const num = new Array(1, 2, 3, 4, 5);
console.log(num);
const veg = ['tomato', 'peas', 'beetroot', 10, true];
veg[5] = 'beans';
veg.push('Carrot'); //to add items to the array
veg.unshift('potato');
veg.pop();    //to delete last item
console.log(Array.isArray(veg));      //to check boolean true or false
console.log(veg.indexOf(10));
console.log(veg);

//Object Literals
const person = {
    firstname: 'Vinu',
    Lastname: 'Shanmugam',
    Age: 20,
    Address: {
        street: '4th Street',
        city: 'gobi',
        State: 'TN'
    },
    hobbies: ['carrom', 'music', 'dance']
}
console.log(person.firstname, person
    Lastname);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   );