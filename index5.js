var bill = prompt("enter bill amount");
bill = Number(bill);

let tip;
let total_bill;

switch(true){
        case(bill>50 && bill<=300):
        tip = bill * 0.15;
        total_bill = bill + tip;       
        console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total_bill}.`);
        break;
        default:
        tip = bill * 0.20;
        total_bill = bill + tip;
        console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total_bill}.`);
        break;
    }
   
        
    
// if (bill>50 && bill<300) {
//     tip = bill*0.15
// }
//  else {
//     tip = bill*0.2
// }


