
// it is sa conditional statement which check the condition if condition is true the if code will run and if the
//conditon is false the false block of code will run 

// itilize the variable 
let age = 18;
//condition 
if (age >=18){
    //witting what we want to print 
    console.log("you are able to make nic ")
}
// another condition if the fiven statment is false
else{
    //write what you want to print 
    console.log("you aere not able to make nic ")
}


// itilize the variable 
let number = 3;

//condition 
if (number%2===0) {
     //witting what we want to print 
    console.log("This is even number");
}

// another condition if the fiven statment is false
else{
     //write what you want to print 
    console.log("it is not evenm number ");
}

//nested if else is used to write the condtion under the else multiple time 

// intlize the variable and taking input from the user 

let winningnumber = 19;

//takking input from the user from prompt 
let userinput = prompt("Guess number ");

//condtion 
if(userinput === winningnumber){
    console.log("your guess is right");
}
// apllying else condtion with nested loop declarring another  condtion under else 
else{
    if(userinput<winningnumber){
        console.log("your guess is too low !!")
    }else{
        console.log("ypur guess is high")
    }
}
