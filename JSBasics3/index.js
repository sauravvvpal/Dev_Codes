// console.log('Hello Jee');

// let lastName = 'Babbar' ;

// let firstName = new String('Love');

// let message = 
// `Hello ${lastName},

// Thanks for the Opportunity

// Regards,
// Babbar`;
  
// console.log(message);

// let words = message.split(' ');

//  console.log(words);
//  let msg='Mera naam hai Saurav';

//  let mssg=msg.split('a');    // Seprated by a
//  console.log(mssg);

//  let obj='SAURAV PAL';
//  let obj1=`hello my name is ${obj}`;
//  console.log(obj1);

//  let date = new Date();


//  let date2 = new Date('June 20 1998 07:15');

//  let date3 = new Date(1998, 11, 20, 7);


//  date3.setFullYear(1947);
//  console.log(date);
//  console.log(date2);

//  console.log(date3);

// let numbers = [1,4,5,7,9];

//console.log(numbers);

// //end -> push
// //beginning -> unshift
// //middle -> splice
// numbers.push(4);
// console.log(numbers);
// numbers.unshift(9);
// console.log(numbers);
// numbers.splice(2,0,'a',3);  // (start index,delete count,added elements)
// console.log(numbers);

// //Searching
 // console.log(numbers);

 //console.log(numbers.indexOf(9));

//we want to check if a number exist in an array
// if(numbers.indexOf(11) != -1) 
//     console.log("present");
//     else
//     console.log("NOt present");

// console.log(numbers.includes(7));

// console.log(numbers.indexOf(4, 2) );

// Array of Objects
// let courses = [
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];

// console.log(courses);

// console.log( courses.includes( {no:1, naam:'Love'} ) );  // this will not work bcoz in reference it search by object

// let c =  courses.find(course => course.naam === 'Love');

// let course= courses.find(function (course) {
//     return course.naam === 'Rahul';
// })

// console.log(c);
// console.log(course);
// console.log(courses);

// let numbers = [1,2,3,4,5,6,7];

// //end
// numbers.pop();
// //beginning
// numbers.shift();
// //middle
// numbers.splice(2, 1);

// // console.log(numbers);

// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;
// console.log(numbers2);

// // numbers = [];
// // console.log(numbers);      // empty nahi hui
// numbers.length = 0;
// console.log(numbers2);
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);

// let first = [1,2,3];
// let second = [4,5,6];       // Combining two arrays
  
// let combined = first.concat(second);
// console.log(combined);

//let marks = [10,20,30,40,50,60,70,80];
//let sliced = marks.slice();
//let sliced = marks.slice(2);
//let sliced = marks.slice(2,6);
//console.log(sliced);



// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a', false, ...second ,'b', true];
// console.log(combined);

// //copy kaise create karu
// let another = [...combined];

// let arr = [10,20,30,40,50];

// for(let value of arr) {
//     console.log(value);
// }

// arr.forEach(number=> console.log(number));



// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(joined);

// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('>');
// console.log(joined);


// let numbers = [5,10,4,40];

// numbers.sort();   // by default sort arrays as strings

//  console.log(numbers);
//  numbers.reverse();
//  console.log(numbers); 

//  // numeric sort using comparator function
//  numbers.sort(function(a,b){return a-b});
//  console.log(numbers);

//  // similarly for reverse 
//  numbers.sort(function(a,b){return b-a});
//  console.log(numbers);


// let numbers = [1,2,-1,-4];

// let filtered =  numbers.filter(value => value >= 0);

// console.log(filtered);


// let numbers = [7,8,9,10];
// console.log(numbers);

// let items = numbers.map(value => 'student_no ' + value);

// console.log(items);

 let numbers = [1,2,-6,-9];

let items = numbers
            .filter(value => value >= 0)
            .map(num => {value: num});

console.log(items);





