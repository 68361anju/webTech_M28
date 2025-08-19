//WAP TO Check  eligible or not?
let age = 18, height = 7, weight = 60;
if (age >= 18 && height >= 6 && weight >= 60) {
    console.log("Eligible for Army");
    console.log(age, height, weight);
}
else {
    console.log(" not Eligible for Army");
}

//WAP TO Check  eligible or not?
age = 18, height = 6, weight = 50;
if (age >= 18) {
    if (height >= 6) {
        if (weight >= 60) {
            console.log("Eligible for Army");
            console.log(age, height, weight);
        }
        else{
           console.log(" not Eligible for Army"); 
        }
    }
}
//WAP to print given number is positive or not?

let num=2;
if(num>0){
     console.log("positive");
}
else{
    console.log("Negetive");
}

//WAP to print all the prime or not?

let n=11; 
let count=0;
for(let i = 1; i<= n ; i++ ){
    if(n%i== 0){
        count++;
    }
}
if(count == 2){
    console.log("prime");
}

//WAP to print all the prime numbers b/w 1 and 1000?

for(let n=2; n<=1000 ; n++){
    let c=0;
    for(let i=1;i<=n; i++){
        if(n%i == 0){
            c++;
        }
    }
    if(c == 2){
        console.log("prime num blw 1 and 1000 is" +" "+ n);
    }
}

////WAP to print count of even num blw 1 to 450?
let c=1;
for(let n=1;n<=450; n++){
        if(n%2 === 0){
            c++;
        }
    }
console.log("even num count  blw 1 and 450 is " + " "+ c);


////WAP to prog to print the given num is divisible by 3 and 7 or not?

let numb = 63;
if(numb%3 === 0 && numb%7 === 0){
    console.log("divisible by 3 Nd 7");
}
else{
    console.log("not divisible ")
}

////WAP to prog to print the multiples of 22?

for(let i=0; i<=1000 ;i++){
       i +=22;
      console.log(i);

}



