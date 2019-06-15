"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validator;
(function (Validator) {
    function isDatesArray(array) {
        if (Array.isArray(array) && "1" in array) {
            console.log("DatesArray is a type of dates Array");
        }
        else
            throw new Error("Not of type DatesArray");
    }
    Validator.isDatesArray = isDatesArray;
})(Validator = exports.Validator || (exports.Validator = {}));
