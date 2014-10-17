/**
 * Created by one on 10/16/2014.
 */
function isSpeeding(speed,options){
    if(!options){
        options = {};
    }
    if(!options.limit){
        options.limit = 60;
    }
    if(options.birthday){
        limit += 5;
    }
    if(speed <= options.limit){
        return 0;
    } else if(speed > limit && speed <= (limit+20)){
        return 1;
    } else {
        return 2;
    }
}