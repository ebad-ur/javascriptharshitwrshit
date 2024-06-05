
// bolean and comparission operator 

//it is used to ceck the values is eqyal or not and give the ans in true and false

//intilize the value 
let num1=7;
let num2=7;

//printting the value 
console.log(num1>num2);

// == vs ===

//==it is used to check the value that the value is equal or not buit it dosent check the datatyope 

let mun1=7;
let mun2="7";
console.log(mun1 == mun2);

//=== it is use to check the data type and the value equal as well

let kon1 = 8;
let kon2 = 8;
console.log(kon1===kon2);

//AND operator
//it is used to check the multiple condition and it will apply when all condtion is true

// itliaze the variable 
let names = "Ebad";
let age = 18;

//applying condtion with and operator 
if (names[0]==="E" && age>=18){
    console.log("Name starting from the E and the age is 18");
}
else{
    console.log("inside loop ")
}

// OR OPERATOR
//it is used to check the multiple condition and it will apply when one  condtion is true

// itliaze the variable 
let firstnames = "Ebad";
let ages = 19;

//applying condtion with and OR
if (firstnames[1]==="E" || ages>=18){
    console.log("inside loop");
}
else{
    console.log("outside loop ")
}

