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
     if(day!=0&&day!=6&&frD.getDate()!=31){numOfWorkingDays++;}
    }
    return numOfWorkingDays;
   };

var startDate = new Date();
var endDate = new Date("Jun 4 2021");


let number = endDate.workingDaysFrom(startDate)-1

if (typeof document === 'undefined') {
    console.log(`we're stuck here for ${number} more days`);
} else {
    document.getElementById("number").innerHTML = number;
    var now = new Date();
    var then = new Date(2021, 5, 4, 15, 40);
    setInterval(function(){
        now = new Date();
        document.getElementById("seconds").innerHTML = Math.floor((then - now) / 1000);
    }, 1000);
}
