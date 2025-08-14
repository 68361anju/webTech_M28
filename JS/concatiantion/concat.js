//! Concatination - joining or Merging two or More Literals.
//! In js we concatination by using (+)  and  (,) and first priority for + and least priority for ,  .

//! Using Numbers: 
//? number+number=Additon;
//? number+string=string;
//? number+boolean=Additon;  booleans are converted to  true-1 and false-0
//? number+undefined=NaN;   
//todo:  NaN-Not a Number
//? number+null=Additon;  null is converted to 0.

console.log(10+10);
console.log(10+"java");
console.log(10+undefined);
console.log(typeof NaN)
console.log(10+null);
console.log(10+true);
console.log(10+false);
console.log(10+true+false);

//! Using Strings: 
//? string+number=concat;
//? string+string=concat;
//? string+boolean=concat;
//? string+undefined=concat;
//? string+null=concat;

console.log("hello"+10);
console.log("hello"+"java");
console.log("hello"+undefined);
console.log("hello"+null);
console.log("hello"+true);
console.log("hello"+false);
console.log("hello"+true+false);

//! Using Boolean: 
//? boolean+number=addition;
//? boolean+string=Concat;
//? boolean+boolean=addition;
//? boolean+undefined=NaN;
//? boolean+null=addition;

console.log("true"+10);
console.log("true"+"java");
console.log("false"+undefined);
console.log("true"+null);
console.log("true"+true);
console.log("true"+false);
console.log("true"+true+false);

//! Using Combination of number, boolean, string, undefined, null: 

console.log(10+10, "hello"+10, 20+10);
console.log("hello"+"java");
console.log("hello"+undefined);
console.log("hello"+null);
console.log("hello"+true);
console.log(10+10, "hello"+false, 20+10);
console.log("hello"+true+false);

//! Using undefined: 
//? undefined+number=Nan;
//? undefined+string=Concat;
//? undefined+boolean=Nan;
//? undefined+undefined=Nan;
//? undefined+null=Nan;

console.log(undefined+10);
console.log(undefined+"java");
console.log(undefined+false);
console.log(undefined+undefined);
console.log(undefined+null);

//! Using null:
//? null+number=addition;
//? null+string=Concat;
//? null+boolean=addition;
//? null+undefined=NaN;
//? null+null=addition; 

console.log(null+10);
console.log(null+"java");
console.log(null+false);
console.log(null+undefined);
console.log(null+null);
