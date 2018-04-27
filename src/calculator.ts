
function getIntById(id: string): number {
    return Number.parseInt((<HTMLInputElement>document.getElementById(id)).value, 10);
};

export class Calculator {

    constructor() {
        document.getElementById("add").addEventListener("click", this.calculate);
    }

    public calculate() {
        const sum = getIntById("x") + getIntById("y");
        document.getElementById("result").innerHTML = Number.isNaN(sum) ? "0" : sum.toString();

    };

}

