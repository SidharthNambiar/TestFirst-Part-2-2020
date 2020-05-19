/* eslint-disable no-unused-vars */


function forEach(array) {

    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

function doubler(num) {
    return num * 2;
}

function map(arr, callback) {

    let newArr = [];
    let returnedVal = null;

    for (let i = 0; i < arr.length; i++) {
        returnedVal = callback(arr[i]);
        newArr.push(returnedVal);
    }
    return newArr;
}

function filter(arr, callback) {
    let newArr = [];
    let returnedBoolean = null;

    for (let i = 0; i < arr.length; i++) {
        returnedBoolean = callback(arr[i]);

        if (returnedBoolean) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

function includes(obj, valToSearch) {

    let arrToInspect = obj;

    if (!Array.isArray(obj)) {
        arrToInspect = Object.values(obj);
    }

    for (let i = 0; i < arrToInspect.length; i++) {
        if (arrToInspect[i] === valToSearch) {
            return true;
        }
    }

    return false;

}

function countWords(startVal, str) {

    let arrOfWords = str.split(' ');
    let count = startVal + arrOfWords.length;

    return count;
}

function reduce(arr, startVal, combiningFunc) {

    let result = startVal;

    for (let i = 0; i < arr.length; i++) {
        result = combiningFunc(result, arr[i])

    }

    return result;
}

let add = (a, b) => a + b;

function sum(arr) {
    return reduce(arr, 0, add)
}

function every(arr, conditionalFunc) {
    valueToCheck = reduce(arr, 0, function (sum, element) {
        return sum + element;
    });

    if (conditionalFunc(valueToCheck) || arr.length === 0) {
        return true;
    }

    return false;
}

function some(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }

    return false;

}