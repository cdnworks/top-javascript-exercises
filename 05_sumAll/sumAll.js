const sumAll = function(a, b) {
    //this function takes 2 integers and returns the sum of all
    //integers between and including them.

    //typecheck
    if((typeof a != "number" && typeof a != "bigint") ||
        (typeof b != "number" && typeof b != "bigint")) {
        return "ERROR";
    }

    if(a < 0 || b < 0) {
        return "ERROR";
    }

    let start, end;
    if(a < b) {
        start = a;
        end = b;
    }
    else {
        start = b;
        end = a;
    }

    //calculate sum
    let sum = 0;
    for(let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
