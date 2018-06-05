

function leapYear(){
    var year = prompt("year");
    if(year % 4 === 0 && year % 100 !== 0){

        console.log("It is Leap Year")
        
    }else if(year % 400 === 0){
        console.log("It is Leap Year")
    }else{
        console.log("It is not Leap Year")
    }

    return;

}

leapYear();