const leapYears = function(year) {
    //leap years are divisible by 4, 
    //and not divisible by 100, but are divisible by 400
    //should return a bool
    return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0); 
};

// Do not edit below this line
module.exports = leapYears;
