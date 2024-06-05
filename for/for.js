//same as whle difernce is the syntax 

//intliaze tghe variable 
for (let i=0; i<=9;i++){
    console.log(i);
}



//intlize the variable out side
let j=10

//loop for 
for (;j<=20; j++){
    console.log(j);
}
console.log(`the loop comes out the program loop when it value become ${j}`);

//the diffrence between the intlizzing the variable the value of i canot use outside the priogram
//but when we are inlizzing the variable we can print or use the value of i out side 
//but if we use var insted of let the variable can be definee out side thwe program 


//loop for with var with the diffrence
for (var k=21; k<=30 ;k++){
    //printting the value of k 
    console.log(k);
}
//printting the value of loop to check when is loop ending 
console.log(`the loop comes out the program loop when it value become ${k}`);

// sum of 100 number

//intliaze the variable 

let num = 100;
let total =0;

//applying for loop
for (let m = 0; m<=100;  m++){
    total = total+m
  

}
//printting the value 
console.log(total);

//break statement it is used to break the situation when the loop is not compleate but the condtion of the 
//statement become true then the it will exit from the condtion and not will be excute the further

//intliaze the variable and loop for
for (o=0; o<=10; o++){
    //condtion
    if (o===4){
        //applying the break condtion 
        break;
    }

}

//printting the array value 
console.log(o);


//continue statement it is used to continue the situation when the loop is not compleate but the condtion of the 
//statement become true then the it the value goes to loop from the condtion and  will be there not come outside
//and compleate the statement of loop

//intliaze the variable and loop for
for (l=0; l<=10; l++){
    //condtion
    if (l===4){
        //applying the break condtion 
        continue;
    }

}

//printting the array value 
console.log(l);

