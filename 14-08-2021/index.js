// *****************task1**************
/*
const calcTip = (bill) =>{
    if(bill<50 && bill >300){
        return bill*0.15;
    }
    else{
        return bill*0.20;
    }
}
const bills = [125, 555, 44];
let tips = new Array();
let totals = new Array();

bills.forEach(element => {
    tips.push(calcTip(element));
});
console.log(tips);

for (let i = 0; i < bills.length; i++) {
    let total = bills[i]+tips[i];
    totals.push(total);
}
console.log(totals);

*/

// ***************task2*************

/*
tempArray = [17,18,19];
let str = "";
function printForecast(tempArray) {

    for (let i = 0; i < tempArray.length; i++) {
        const element = tempArray[i];
        str = str + "..." + tempArray[i] + "°C" + " in " + [i + 1] + " day";
    }
    return str;
}
console.log(printForecast(tempArray));
*/