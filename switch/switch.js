//swith statemnt 
let day =2;
switch(day){
    case 0:
        console.log("sunday");
        break;

        case 1:
            console.log("monday");
            break;
    

    case 2:
        console.log("tuesday");
        break;


case 3:
    console.log("wednesday");
    break;


case 4:
    console.log("thyrsday");
    break;


case 5:
    console.log("friday");
    break;

    case 6:
        console.log("saturday");
        break;

}

//switch statement by taking input from the user 

let days = prompt("Enter a number between 0 and 6:");

switch (parseInt(days)) {
    case 0:
        console.log("Sunday");
        break;

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid input. Please enter a number between 0 and 6.");
}
