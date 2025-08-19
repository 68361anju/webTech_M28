//! Function - set of instructions or a block of code which is is used to perform the specific task or an action
// it is one of the non primitive datatype in js.
//datatype of function is function
//adv of function is code reusability.
//until and unless we call te function it wont et executed.
//we call / invoke the function for multiple times.
//



//? Named/eneral/normal/function declaration
//Anonymous function
//Arrow function
//function expression
//SIF(self invokin function)/IIFE(immediately invoking function expression )
//callback function
//HOF(higher order function)
//nested function
//generator function
//first class function

//? Named/eneral/normal/function declaration
//function with parameters and with return stmt

function fullname(fname,lname){
    return fname+lname;
}
let name1 = fullname(`dachepalli `, `Anjali`);
console.log(name1);
console.log(typeof fname);
console.log(typeof lname);
console.log(typeof fullname);
console.log(fullname);

//function with parameters and without  return stmt

function add(a,b){   //a = 0,b = 0 behaves like default value 0
    console.log(a+b);

}
add(10,20);
add(10+20);
add();//Nan
add(`10`,true);
add(10, false);
add(`ello`, `worls`)
add(null,null);

//function without parameters and with  return stmt

function fun1(){
    console.log(`fun1`);
    return true;
    
}
console.log(fun1());
fun1();

//function without parameters and without  return stmt
















