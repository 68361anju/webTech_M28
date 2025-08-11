//hoisting----The process of moving the declarations to the top of its scope by the interpreter during the runtime.
//It allows the developer or the programmer to acess the variables before its declaration.
//we have 2 types
//1.variable hoisting
//2.function hoisting

//variable hoisting ---the process of moving the variabledeclaration to the top of its scope by the interpreterduring runtime.
//It is possible only in var keyword.
//Not possible in let and const becoz of temporal dead zone(TDZ)
//TDZ:It is thetime given between the var declaration and its initilization is known as TDZ.


var a;
a=100;
console.log(a);

console.log(a);
var a;


console.log(b);
var b;
b=100;


console.log(c);
c=100;
var c;

console.log(c);
c=100;
var c;

//d=100;
//var d;
//console.log(d);

//console.log(e);
//e=100;
//let e;

console.log(a);
var a=100;



