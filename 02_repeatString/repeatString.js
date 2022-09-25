const repeatString = function(str, num) {
    //takes an input string, str
    //and returns a result string which is the input string
    //repeated num times.
    let result = [];

    //input testing conditions
    if(num < 0) {
        return "ERROR";
    }

    for(let i = 0; i < num; i++) {
        result.push(str);
    }
    
    return result.join(""); //converts the string array into a string with no separator
};

// Do not edit below this line
module.exports = repeatString;
