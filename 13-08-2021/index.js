const calAverage = (score1 , score2 ,score3) => {
    let avg = (score1 + score2 + score3)/3;
    return avg;
}
let teamA = parseInt( calAverage(10,20,30));
let teamB= parseInt( calAverage(50,30,60));


const checkWinner = (avgIndiaA , avgIndiaB) => {
    if (avgIndiaA >= avgIndiaB*2) {
        console.log("India-A win ( " + avgIndiaA + " vs " +  avgIndiaB + ").");
    }
    else if(avgIndiaB > avgIndiaA*2){
        console.log("India-B win ( " + avgIndiaA + " vs " +  avgIndiaB + ").");
    }
    else{
        console.log("No team wins");
    }
}

checkWinner(teamA , teamB);

