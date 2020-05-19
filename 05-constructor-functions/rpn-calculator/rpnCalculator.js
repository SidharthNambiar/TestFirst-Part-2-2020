/* eslint-disable no-unused-vars, no-throw-literal*/


function RPNCalculator() {

    this.total = 0;
    this.values = [];



    this.push = function (num) {
        this.values.push(num)

    };






}



RPNCalculator.prototype.plus = function () {

    if (this.values.length === 0) {
        throw `rpnCalculatorInstance is empty`
    }

    for (let i = 0; i < this.values.length; i++) {
        this.total = this.total + this.values[i];
    }

    this.values = [];

}



RPNCalculator.prototype.minus = function () {
    if (this.values.length === 0) {
        throw `rpnCalculatorInstance is empty`
    }

    for (let i = 0; i < this.values.length; i++) {

        this.total = this.values[i] - this.total;

    }

    this.total *= -1;

    this.values = [];

}


RPNCalculator.prototype.times = function () {
    if (this.values.length === 0) {
        throw `rpnCalculatorInstance is empty`
    }

    for (let i = 0; i < this.values.length; i++) {
        if (this.total !== 0) {
            this.total = this.total * this.values[i];
        }
        else {
            this.total = 1 * this.values[i]
        }
    }

    this.values = [];

}

RPNCalculator.prototype.divide = function () {
    if (this.values.length === 0) {
        throw `rpnCalculatorInstance is empty`
    }

    for (let i = 0; i < this.values.length; i++) {
        if (this.total !== 0) {
            this.total = this.total / this.values[i];
        }
        else {
            this.total = this.values[i] / 1
        }
    }

    this.values = [];

}

RPNCalculator.prototype.value = function () {
    return this.total;
};