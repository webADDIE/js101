/**
 * Created by one on 10/16/2014.
 */
function mason(small,large,total_length){
    var totalSmall = small;
    var totalLarge = large*5;
    var availableLength = totalSmall + totalLarge;
    if(availableLength >= total_length){
        return true;
    } else{
        return false;
    }
}

console.log(mason(2,1,20));