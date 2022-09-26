const reverseString = function(str) {
    //split str into an array
    //return reversed array to string
    let arr = str.split(""); //split by each char
    return arr.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
