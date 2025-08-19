//while loop

// Init ;
// while(condition){
//     //stmts;
//     //update
// }

let i=1;
while(i<= 1000){
    console.log(i);
    i++;
}

i =0;
while(i<=1000){
    if(i%2 == 0 ){
         console.log(i);
    }
   i++;
}


// init  ;
// do{
//     //stmts
//     //update
// }while(condition);

i = 1;
do{
     console.log(i);
     i++;
}while(i<=1000);

i = 0;
do{
     console.log(i);
     i+=2;
     
}while(i<=1000);


//function

function demo(NAME)
{
    console.log(prompt(`enter your name:`));
}
demo();

let memo = function()
{
     console.log(`memo`);
     
}
console.log(memo);


let m = (a,b)=>
{
     console.log(`10`+`10`);
     
}
m();//1010

m=_=>{console.log(`demo`);
     return 100;
}
let a = m();
console.log(a);

let q =_=>{console.log(`wopwor`);} 
q();

