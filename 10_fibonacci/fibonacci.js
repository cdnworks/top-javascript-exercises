const fibonacci = function(number) {
    //return the nth number in the fibonacci sequence
    //the fibonacci sequence is defined as n = (n-1) + (n-2)
    //parse input and initialize sequence
    let n = parseInt(number);
    let prev = 0;
    let next = 1;
    let temp = 0;

    //edgecases
    if(n < 0) {return "OOPS"};
    if(n === 0) {return 0};
    if(n === 1) {return 1};

    for(let i = 2; i <= n; i++) { //counting from the start of the sequence, let i = 0; so the third number (and start of our sequence) is i[2]
        temp = prev + next;
        prev = next;
        next = temp;
    };

    return temp;
};

// Do not edit below this line
module.exports = fibonacci;
