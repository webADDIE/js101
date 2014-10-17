/**
 * Created by one on 10/16/2014.
 */
function isSpeeding(speed,isBirthday){
    var check = speed;
    var level = 0;
    if (isBirthday === true) {check = speed - 5;}
    if (check < 60) {level = 0;}
    else if (check < 80) {level = 1;}
    else {level = 2;}
    return level;
}

console.log(isSpeeding(64,true));