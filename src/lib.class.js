"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clock {
    constructor(date) {
        this.date = date;
    }
}
exports.Clock = Clock;
class Timer extends Clock {
}
exports.Timer = Timer;
var createClock = function (date) {
    return new Clock(date);
};
console.log(createClock("2001-05-19"));
