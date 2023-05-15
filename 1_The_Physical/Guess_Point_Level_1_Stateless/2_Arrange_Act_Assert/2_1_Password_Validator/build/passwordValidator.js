"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordValidator = void 0;
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.prototype.valPass = function (password) {
        var result = true;
        var errorKey = [];
        var validated = {
            result: result,
            errorKey: errorKey
        };
        if (!hasDigit(password)) {
            validated.errorKey.push('Missing Digit');
        }
        if (fiveChar(password)) {
            validated.errorKey.push('Invalid Length - Password must be at least than 5 characters');
        }
        if (fifteenChar(password)) {
            validated.errorKey.push('Invalid Length - Password can not exceed 15 characters');
        }
        if (!hasUpper(password)) {
            validated.errorKey.push('Missing Upper-case Letter');
        }
        if (errorKey.length > 0) {
            validated.result = false;
        }
        console.log(validated);
        return validated;
    };
    return PasswordValidator;
}());
exports.PasswordValidator = PasswordValidator;
function hasDigit(password) {
    return /\d/.test(password);
}
function fiveChar(password) {
    return (password.length <= 5);
}
function fifteenChar(password) {
    return (password.length >= 15);
}
function hasUpper(password) {
    return /[A-Z]/.test(password);
}
