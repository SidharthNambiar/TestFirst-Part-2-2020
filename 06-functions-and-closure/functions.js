/* eslint-disable no-unused-vars */

function concatString() {


    let arrFromArguments = Array.from(arguments)
    let result = arrFromArguments.join('')
    return result
}

function yourFunctionRunner(callback) {

    let result = '';
    for (let i = 0; i < arguments.length; i++) {
        let returnVal = arguments[i]();
        result += returnVal;
    }

    return result;
}

function makeAdder(outerNum) {

    return function (innerNum) {
        return outerNum + innerNum;
    }
}

function once(func) {
    let count = 0;

    return function () {

        if (count === 0) {
            count += 1;
            return func();
        }
        else {
            return 'the function has already been called...'
        }
    }
}

function createObjectWithClosures() {

    let value = 0;

    return {
        oneIncrementer() {
            value += 1;
        },
        tensIncrementer() {
            value += 10;
        },
        getValue() {
            return value;
        },
        setValue(num) {
            value = num;
        }
    }
}

function dontSpillTheBeans(mySecret) {

    return {
        getSecret(){
            return mySecret;
        },

        setSecret(newSecret){
            mySecret = newSecret;
        },

    }
}