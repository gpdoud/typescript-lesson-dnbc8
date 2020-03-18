"use strict";
var Student = /** @class */ (function () {
    function Student(name, sat, major, active) {
        if (major === void 0) { major = "General Studies"; }
        if (active === void 0) { active = true; }
        this.name = name;
        this.sat = sat;
        this.major = major;
        this.active = active;
    }
    Student.prototype.toTableRow = function (tbody) {
        var tr = $("<tr></tr>");
        tr.append("<td>" + this.name + "</td>");
        tr.append("<td>" + this.sat + "</td>");
        tr.append("<td>" + (this.active ? "Y" : "N") + "</td>");
        tr.append("<td>" + this.major + "</td>");
        tbody.append(tr);
    };
    return Student;
}());
var students = [
    new Student("Alice", 1200, "Math"),
    new Student("Bill", 900, "General Studies", false),
    new Student("Catherine", 1350, "Engineering"),
    new Student("David", 1250, "Pre-Med"),
    new Student("Erin", 1420, "Law")
];
$().ready(function () {
    $("button").click(function () {
        display();
    });
});
var display = function () {
    var tbody = $("tbody");
    tbody.html('');
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var s = students_1[_i];
        s.toTableRow(tbody);
    }
};
