// ***********task 1 **************
/*
const arr1 = [1,2,3,4,5,6,7,8];

function doubleValues(arr) {
    const newArr = [];
    arr.forEach(element => {
        newArr.push(element*2); 
    });
    return newArr;
}
console.log(doubleValues(arr1));
*/

// ***********task 2 **************

/*
const arr2 = [1,2,3,4,5,6,7,8];

function onlyEvenValues(arr) {
    
    const newArr = arr.filter(element =>{
        return element%2 === 0;
    });
    
    return newArr;
}
console.log(onlyEvenValues(arr2));
*/

// ***********task 3 **************
/*
const arr3 = ["first","second","third"];

function showFirstAndLast(arr) {

    let newArr = arr.map(str => {
        return str.charAt(0) + str.charAt(str.length -1);
    });
    return newArr;
}
console.log(showFirstAndLast(arr3));
*/


// ***********task 4 **************

let arr4 = [1,2,3,4,5,22,44];

function showMultipleByTwo(arr) {

    let newArr = arr.reduce((accumulator , val) => {
        accumulator.push(val*2);
        return accumulator;
    },[]);
    return newArr;
}
console.log(showMultipleByTwo(arr4));


// ***********task 5 **************

/*
function run() {
    
const num = Number (prompt("enter the number:"));
switch (num) {
    case 1:
        document.getElementById("kb").innerText = "Monday";
        break;
    case 2:
        document.getElementById("kb").innerText = "Tuesday";
        break;
    case 3:
        document.getElementById("kb").innerText = "Wednesday";
        break;
    case 4:
        document.getElementById("kb").innerText = "Thursday";
        break;
    case 5:
        document.getElementById("kb").innerText = "Friday";
        break;
    case 6:
        document.getElementById("kb").innerText = "Saturday";
        break;
    case 7:
        document.getElementById("kb").innerText = "Sunday";
        break;

    default:
        console.log("invalid input ! try again")
        run();
        break;
}
}
run();
*/
