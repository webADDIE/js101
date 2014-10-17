/**
 * Created by one on 10/16/2014.
 */
function findLongestWord(str){
    var words = str.trim().split(" ");
    console.log(words); //this displays the array
    var longest = "";
    for(var i=0; i<words.length; i++){
        var word=words[i];
        if (word.length>longest.length){
            longest=word;
        }
    }
    return longest;
}
console.log(findLongestWord("you have julie"));