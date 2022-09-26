const removeFromArray = function(...args) {
    //args should always be in the form:
    //(array to modify, thing to remove 1, thing to remove 2, ..., etc.)

    let arr =  args[0];     //copy original array
    let result = [];        //array to contain the formatted array

    arr.forEach(element => {            //iterate through each array item
        if(!args.includes(element)) {   //if the element is NOT in the args list
            result.push(element);       //add it to the result array
        }
    });

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
