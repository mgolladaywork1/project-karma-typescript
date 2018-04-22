
function getIntById(id: string): number {
    return parseInt((<HTMLInputElement>document.getElementById(id)).value, 10);
};

class Calculator {

    constructor() {
        document.getElementById('add').addEventListener('click', this.calculate);
    }

    public calculate() {
        const sum = getIntById('x') + getIntById('y');
        document.getElementById('result').innerHTML = isNaN(sum) ? '0' : sum.toString();

    };

}

