//  ******  exercise 1  *******
/*
let x = 3;
let y = -7;
let z = 2;

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
let a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

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
let chicken = 3;
let cow = 2;
let dog = 4;

let total = chicken + cow + dog;

function animals(lchicken ,lcow , ldog) {

    let total_leg_chicken = chicken * lchicken ; 
    let total_leg_cow = cow * lcow ; 
    let total_leg_dog = dog * ldog ; 

    alert(`legs of chicken:${total_leg_chicken} legs of cow: ${total_leg_cow} legs of dog:${total_leg_dog}`);

}

if (total>10) {
    animals(2,4,4); 
}
else{
    animals(4,6,1)
}
*/

//  ******  exercise 4  *******

let x = Number(prompt("enter the first number:"));
let y = Number(prompt("enter the second number:"));

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















