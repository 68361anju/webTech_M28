console.log("hello");//hello

let str = "";
for (let i = 0; i <= 5; i++) {
    console.log("hello"); //5 hello
}

for (let i = 0; i <= 5; i++) {
    console.log("hello");
    console.log("\n");
    //hello 
    // hello
    //  hello
    //  hello
    //  hello
}

for (let i = 0; i <= 5; i++) {
    console.log("hello" + i);
    //e
    }

for (let i = 0; i <= 5; i++) {
    str += "hello";
    str += "\n";
}
console.log(str);

let str1 = "";
for (let i = 0; i <= 5; i++) {
    for (let i = 0; i <= 5; i++) {
    str1 += "hello";
    str1 += "\n";
    }
}
console.log(str1);

for (let i = 0; i <= 5; i++) {
    for (let i = 0; i <= 5; i++) {
    document.writeln("*");
       }
       document.writeln("<br>");
}

let str2 = "";
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= i; j++) {
    str2 += "*";
    }
    str2 +="\n";
}
console.log(str2);

let str3= "",space=4;
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= space; j++) {
        str3+=" ";
           }
        for(let k=1;k<=i;k++){
            str3 += "*";

        }
 
    str3 +="\n";
    space--
}
console.log(str3)








