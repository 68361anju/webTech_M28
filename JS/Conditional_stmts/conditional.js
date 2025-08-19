// if stmts
let age = 2;
if (age > 18) {
    console.log("eligible");
}

let Mockrating = 1;
if (Mockrating == 1) {
    console.log("attend interviews");
}

let day = "sunday";
if (day == "sunday") {
    console.log("no holiday");
}

//if-else stmts


if (age > 18) {
    console.log("eligible");
}
else {
    console.log(" not eligible");

}


if (Mockrating == 1) {
    console.log("attend interviews");
}
else {
    console.log(" dabba fellow study well");

}


if (day == "sunday") {
    console.log("no holiday");
}
else {
    console.log("funday");

}

let num = 50;
if (num > 0) {
    console.log(`${num} is positive number `);
}
else {
    console.log(`${num} is negetive number`);
}

if (num % 2 == 0) {
    console.log(`${num} is even number `);
}
else {
    console.log(`${num} is odd number`);
}

age = 19;
let height = 6;
let weight = 70;
if (age >= 18 && height >= 6 && weight >= 60) {
    console.log(`eligible for army`);

}
else {
    console.log(` not eligible for army`);

}

//else-if ladder

if (age < 18) {
    console.log(`not eligible for army because age is <18`);
}
else if (height < 6) {
    console.log(`not eligible for army because height is <6`);
}
else if (weight < 60) {
    console.log(`not eligible for army because weight is <60`);
}
else {
    console.log(`eligible for army `);
}

//nested-if
if (num > 0) {
    if (num % 2 == 0) {
        console.log(`number is positive and even number`);
    }
    else {
        console.log(`number is positive and odd number`);

    }
}
else {
    if (num % 2 == 0) {
        console.log(`number is negetive and even number`);
    }
    else {
        console.log(`number is negetive and odd number`);

    }
}

//switch-case

day = "sunday";
switch ("sunday") {
    case "sunday":
        console.log(`funday`);
        break;
    case "Monday":
        console.log(`java`);
        break;
    case "Tuesday":
        console.log(`web`);
        break;
    case "Wednesday":
        console.log(`python`);
        break;
    case "Tursday":
        console.log(`adv java`);
        break;
    case "Friday":
        console.log(`sql`);
        break;
    case "Saturday":
        console.log(`weekend`);
        break;
    default:
        console.log(`invalid input`);
        break;
}

//prog
//debit

let Aval_bal = 1000;
let operation = "debit";
let amount = 400;

if (Aval_bal > 0) {
    if (Aval_bal > amount && amount>0) {
        account = Aval_bal - amount;
        console.log(`available balance is ${account} and debited ${amount}`);

    }
    else {
        console.log(`insufficient balance ${Aval_bal} or amount should be > 0`);
    }
}

///credit
if (amount > 0) {
    account = Aval_bal + amount;
    console.log(`available balance is ${account} and credited ${amount}`);

}
else {
    console.log(`choose the valid amount for credit `);
}

///mams logic
if(operation === `credit`){
    Aval_bal+=amount;
    console.log(`credited sucessfully and available balance is ${Aval_bal}`)
}
else if(operation === `debit`){
    if(amount<Aval_bal){
    Aval_bal-=amount;
    console.log(`debited sucessfully and available balance is ${Aval_bal}`) 
    }
    else{
        console.log(`insufficient balance`);
        
    }
}
   
prompt(`enter name`)



