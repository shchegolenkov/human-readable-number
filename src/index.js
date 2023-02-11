module.exports = function toReadable(number) {
    const string = String(number);
    let result = "";

    const units = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const dozens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    Object.keys(dozens).forEach(function (key) {
        if (key == string[string.length - 2]) {
            result += result.length == 0 ? dozens[key] : " " + dozens[key];
        }
    });

    Object.keys(units).forEach(function (key) {
        if (key == string[string.length - 1]) {
            result += result.length == 0 ? units[key] : " " + units[key];
        }
    });

    if (number === 0) {
        result = "zero";
    }

    switch (string.slice(-2)) {
        case "10":
            result = "ten";
            break;
        case "11":
            result = "eleven";
            break;
        case "12":
            result = "twelve";
            break;
        case "13":
            result = "thirteen";
            break;
        case "14":
            result = "fourteen";
            break;
        case "15":
            result = "fifteen";
            break;
        case "16":
            result = "sixteen";
            break;
        case "17":
            result = "seventeen";
            break;
        case "18":
            result = "eighteen";
            break;
        case "19":
            result = "nineteen";
            break;
    }

    Object.keys(units).forEach(function (key) {
        if (key == string[string.length - 3]) {
            result = result
                ? units[key] + " hundred " + result
                : units[key] + " hundred";
        }
    });

    return result;
};
