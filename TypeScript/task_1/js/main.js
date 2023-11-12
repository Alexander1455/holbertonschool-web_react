"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClass = exports.printTeacher = void 0;
var printTeacher = function (firstName, lastName) {
    var firstLetter = firstName.charAt(0);
    return "".concat(firstLetter, ". ").concat(lastName);
};
exports.printTeacher = printTeacher;
// Implementation of the StudentClass
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
