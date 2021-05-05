// func yoinked from https://mygeekjourney.com/programming-notes/javascript-how-to-calculate-number-of-working-days/
Date.prototype.workingDaysFrom=function(fromDate){
    // ensure that the argument is a valid and past date
    if(!fromDate||isNaN(fromDate)||this<fromDate){return -1;}
    
    // clone date to avoid messing up original date and time
    var frD=new Date(fromDate.getTime()),
        toD=new Date(this.getTime()),
        numOfWorkingDays=1;
    
    // reset time portion
    frD.setHours(0,0,0,0);
    toD.setHours(0,0,0,0);
    
    while(frD<toD){
     frD.setDate(frD.getDate()+1);
     var day=frD.getDay();
     if(day!=0&&day!=6){numOfWorkingDays++;}
    }
    return numOfWorkingDays;
   };

var startDate = new Date();
var endDate = new Date("Jun 4 2021");


let number = endDate.workingDaysFrom(startDate)
document.getElementById("number").innerHTML = number;