const fibonacci = function (number) {
    if (number < 0) return 'OOPS';
    if (number == 0) return 0;
    let num1 = 0;
    let num2 = 1;
    for (let i = 1; i < number; i++) {
        const temp = num2;
        num2 = num1 + num2;
        num1 = temp;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
