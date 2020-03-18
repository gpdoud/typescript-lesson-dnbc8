class Student {
    name: string;
    sat: number;
    active: boolean;
    major: string;

    constructor(name: string, sat: number, major: string = "General Studies", active: boolean = true) {
        this.name = name;
        this.sat = sat;
        this.major = major;
        this.active = active;
    }

    toTableRow(tbody: any): void {
        let tr = $("<tr></tr>");
        tr.append(`<td>${this.name}</td>`);
        tr.append(`<td>${this.sat}</td>`);
        tr.append(`<td>${this.active ? "Y" : "N"}</td>`);
        tr.append(`<td>${this.major}</td>`);
        tbody.append(tr);
    }
}

let students = [
    new Student("Alice", 1200, "Math"),
    new Student("Bill", 900, "General Studies", false),
    new Student("Catherine", 1350, "Engineering"),
    new Student("David", 1250, "Pre-Med"),
    new Student("Erin", 1420, "Law")
];

$().ready(() => {
    $("button").click(() => {
        display();
    });
});

const display = () => {
    let tbody = $("tbody");
    tbody.html('');
    for(let s of students) {
        s.toTableRow(tbody);
    }
};