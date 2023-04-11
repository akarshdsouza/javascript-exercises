const palindromes = function (str) {
    const finalString = str.toLowerCase().replace(/[^a-z]/g, "");
    return finalString.split("").reverse().join("") == finalString;
};

// Do not edit below this line
module.exports = palindromes;
