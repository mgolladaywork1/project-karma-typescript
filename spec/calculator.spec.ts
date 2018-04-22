//import { Calculator } from "../src/calculator";

describe("Calculator", function () {


    let calculator: Calculator;

    // API for interacting with the page.
    const controls = {
        get result(): string {
            return document.getElementById("result").innerHTML;
        },
        get x(): string {
            return (<HTMLInputElement>document.getElementById("x")).value;
        },
        set x(val: string) {
            (<HTMLInputElement>document.getElementById("x")).value = val;
        },
        get y() {
            return (<HTMLInputElement>document.getElementById("y")).value;
        },
        set y(val) {
            (<HTMLInputElement>document.getElementById("y")).value = val;
        },
        clickAdd: function () {
            document.getElementById("add").click();
        }
    };

    // inject the HTML fixture for the tests
    beforeEach(function () {
        // Why this line? See: https://github.com/billtrik/karma-fixture/issues/3
        fixture.setBase("spec");
        fixture.load("calculator.fixture.html");
        calculator = new Calculator();
    });

    // remove the html fixture from the DOM
    afterEach(function () {
        fixture.cleanup();
    });

    it("should calculate 3 for 1 + 2", function () {
        controls.x = "1";
        controls.y = "2";
        controls.clickAdd();
        expect(controls.result).toBe("3");
    });

    it("should calculate zero for invalid x value", function () {
        controls.x = "hello";
        controls.y = "2";
        controls.clickAdd();
        expect(controls.result).toBe("0");
    });

    it("should calculate zero for invalid y value", function () {
        controls.x = "1";
        controls.y = "goodbye";
        controls.clickAdd();
        expect(controls.result).toEqual("0");
    });

});