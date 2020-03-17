var a = 0;
let b = 1;
function X() {
    return 1;
}
let Y = function() {
    return 0;
}
const Z = () => {
    return -1;
}
let a1: number = 5;
a1 = "abc";
let b1: string = "ABC";
b1 = true;
let c1:boolean = true;
function x1(t: number): void {
   
}
class Customer {

    id: number = 0;
    name: string;
    active: boolean = true;
    sales: number;

    constructor(name: string = 'NEW Cust') {
        this.id = 0;
        this.name = name;
        this.active = true;
        this.sales = 0;
    }

    print(): void {
        console.log(`${this.name}`);
    }
}