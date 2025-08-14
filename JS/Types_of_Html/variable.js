//!variables
//!variable is like a container which is used to value in it
//? declare a variable in js,we use var,let and const keywords
//? Once a variable is created in js it can store any type of value in it
//? If we declare a variable with var keyword ,it allow the developer / programmer to re-declare it which should not happen.
//so they introduced let and const keywords in ES-6 version
 // todo var keyword:-
 var a;                //?declaration is possible
 a=10;                 //?initialisation is possible
 console.log(a);
 document.writeln(a)
 var a;                 //? re-decalration is possible
 a=100;                 //? re-initialsation is possible
 console.log(a);
  document.writeln(a)


 //todo let keyword
 let b;             //?declaration is possible
 b=10;              //?initialisation is possible
 console.log(b)
  document.writeln(a)
//   let b;         //? re-decalration is  not possible
b=10 ;               //? re-initialsation is possible
console.log(b); 
 document.writeln(b)    
  
//todo const keyword
// const c;          //?declaration is not possible
// c=30;             //?initialisation is  not possible
const c=30;           // declaration and initialisation is possible in same line
console.log(c);
 document.writeln(c)
// const c;         //? re-decalration is  not possible
//c=300;           //? re-initialsation is possible