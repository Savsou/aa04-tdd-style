const chai = require("chai")
const expect = chai.expect;
const { returnsThree, reciprocal } = require('../problems/number-fun')

describe("returnsThree()", () => {
    it("should return the number 3", () => {
        expect(returnsThree()).to.equal(3);
    })
})

describe("reciprocal(num)", () => {
    it("should return the reciprocal of the given number", () => {
        const num1 = 4;
        const num2 = 8;
        const num3 = 10;

        expect(reciprocal(num1)).to.equal(1 / num1)
        expect(reciprocal(num2)).to.equal(1 / num2)
        expect(reciprocal(num3)).to.equal(1 / num3)
    })
    it("should return a RangeError if the given number is less than 1 or greater than 1000000", () => {
        const num = -5;

        expect(() => reciprocal(num)).to.throw(RangeError)
    })
})
