var a=10;
let b=20;
const c=30;
console.log(a,b,c);//10,20,30   globally accessed
{
var a=100;
let b=200;
const c=300;
    console.log(a,b,c);// 100,200,300  locally accessed
}
console.log(a,b,c);//100,20,30