console.log('Chaliye shuru karte hai ');

//object create
// let rectangle = {
//     length: 4,
//     breadth: 5,

//     draw: function() {
//         console.log('DRAW RECTANGLE');
//     }
// };

// console.log(rectangle.draw);         

//factory function 

// function createRectangle(len, bre) {        it is just like normal object function
//     const rectangle = {
//         length: len,
//         breadth:bre ,

//         draw() {
//             console.log('drawing rectangle');
//         }
//     };
//     return rectangle;
// }

// let rectangleObj1 = createRectangle(5, 4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

// console.log(rectangle2);
//  createRectangle(6,7);  this will not work

//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> intialise/Define
// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw= function() {
//         console.log('drawing');
//     }
// }

// Rectangle.

// //object creation using constrcutor function
// let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = 'yellow';     // Manually adding the new property
// console.log(rectangleObject);

// delete rectangleObject.color;     // releasing the property of any object
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length', 'breadth',
// `this.length = length;
// this.breadth = breadth;
// this.draw= function() {
//     console.log('drawing');
// }`);

// //object creation using Rectangle1
// let rect = new Rectangle1(2,3);

// rect.length;

// console.log(rect);


// rectangle.length;
// rectangle.breadth;

// rectangle.draw();

// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// Pass by value
// let a = 10;
// let b = a;

// a++;
// console.log(a);  //11
// console.log(b);  //10

// Pass by reference
// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);      // 11
// console.log(b.value);      // 11

// let a = 10;

// function inc(a) {
//     a++;
// }

// inc(a);                // NO increment bcoz of pass by value

// console.log(a);

// let a = {value:10 };

// function inc(a) {
//     a.value++;         // change will be observed bcoz of pass by reference
// }

// inc(a);

// console.log(a.value);

let rectangle = {
    length:2,
    breadth:4
};

// for-in loop 
// for(let key in rectangle ) {
//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// for-of loop
// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }

// if('length' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }


// // object - colone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//Object Cloning #2
let src = {
    a:10,
    b:20,
    c:30
};

let src2 = { value: 25};

let dest = Object.assign({}, src, src2);

console.log(dest);

src.a++;

console.log(dest);    // no change in  dest object

//Object Cloning #3
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};

// console.log(dest);

// src.a++;

// console.log(dest);
