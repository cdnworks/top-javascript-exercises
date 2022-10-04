const palindromes = function (str) {
    //remove any formatting, spaces and puctuation
    //probably dont even have to remove spaces but whatever
    //make a deep copy of the input, sanitize it as described above, then see if it's the same forward and backward
    sanitizedString = str.toLowerCase().replace(/[^a-z]/g, "");

    return (
        sanitizedString.split("").reverse().join("") == sanitizedString //see if a reversed string (split back into an array, reversed and rejoined) is the same as the processed string
    );
};

// Do not edit below this line
module.exports = palindromes;
