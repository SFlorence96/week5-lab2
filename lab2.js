'use strict'; 

function smallestNums(num1, num2, num3) { 
    if (num1 < num2 && num1 < num3) { 
        alert (a + "is the smallest number"); 
    } else if (num2 < num1 && num2 < num3) { 
        alert (num2 + "is the smallest number");
    } else if (num3 < num1 && num3 < num2 ) {  
        alert (num3 + "is the smallest number");
    }
} 

smallestNums(3,6,9) 
 

function negativeOrPositiveZero (number) {
    if (number > 0){ 
        alert("Positive");
    } else if (number === 0){ 
        alert("Zero");
    } else if (number < 0) { 
        alert("Negative")
    }
    } 

    let userInput = prompt("Pick a number"); 

    negativeOrPositiveZero(userInput);  


function votingAge(age){ 
    if (age>= 18) { 
        alert("You can vote");
    } else  { 
        alert("You need to be 18 or older to vote");
    }
}