//  ******  exercise 1  *******
/*
const x = 3;
const y = -7;
const z = 2;

prod = x * y * 2 ;
if(prod<0){
    
    alert("The sign is -");
}
else if(prod>0){
    alert("The sign is +");
}
else{
    alert("value is 0");
}
*/

//  ******  exercise 2  *******
/*
const a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (a[i]%2==0) {
        alert(`${a[i]} is even` );
        
    }
    else{
        alert(`${a[i]} is odd` );
    }
    
}
*/


//  ******  exercise 3  *******
/*
function run(){

const chicken =Number(prompt("enter the number of chicken:"));;
const cow =Number(prompt("enter the number of cow:"));;
const dog =Number(prompt("enter the number of dog:"));;

const total = chicken + cow + dog;

if (total>10) {
    animals(2,4,4); 
}
else if(total<=10){
    animals(4,6,1);
}
else{
    alert("only numbers allowed");
    run();
}

function animals(chickenLeg ,cowLeg , dogLeg) {

    let totalLegChicken = chicken * chickenLeg ; 
    let totalLegCow = cow * cowLeg ; 
    let totalLegDog = dog * dogLeg ; 

    alert(`legs of chicken:${totalLegChicken} legs of cow: ${totalLegCow} legs of dog:${totalLegDog}`);
}
}
run();

*/


//  ******  exercise 4  *******

let x = Number(prompt("enter the first number:"));
let y = Number(prompt("enter the second number:"))

let a = x + y; 
let b = x - y ;
let c = x * y ;
let d = x / y ;
d = parseFloat(d).toFixed(2);
let e = x % y ;
let h = x**y;
let f = ++x ;
let g = --y;

document.getElementById("kb").innerHTML =(`addition : ${a} <br> substration : ${b} <br> multiplication: ${c}
<br> division: ${d} <br> remainder : ${e} <br> increament of x : ${f} <br> decreament of y : ${g} <br> exponential: ${h}`);

