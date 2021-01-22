
// The solution to the first problem is given below.
function kilometerToMeter(km){ /** I have entered a parameter which name is km means kilometer */
    var meter = km * 1000;
    var input = meter;
    if(input <= -1){
        return ("Distance can't be negative");
    }
    return input;
   
}

// The solution to the second problem is given below.
function budgetCalculator(watch, phone, laptop){
    var wristWatch  = watch * 50;
    var mobile  = phone * 100;
    var pc = laptop * 500;
    var totalPrice  = wristWatch + mobile + pc;

    if(wristWatch <= -1 || mobile <= -1 || pc <= -1 ){
        return ("product quantity can't be negative");
    }
    return totalPrice;
}

// The solution to the third problem is given below.
function hotelCost(day){
    var cost = [100,80,50]
    var firstTen  = day * cost[0];
    var secondTen = day * cost[1];
    var twentyup  = day * cost[2];
  
     if(day >20){
         return twentyup;
     }
     else if(day >=11){
         return secondTen;
     }
     return firstTen ;
   
 }
// The solution to the fourth problem is given below.
 function megaFriend(friend){
    var mega = "";
    for(var i = 0; i < friend.length; i++){
        var longest = friend[i];
        if(longest.length> mega.length){
            mega = friend[i];
        }
    }
    return mega;
}
