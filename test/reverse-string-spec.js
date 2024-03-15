const chai = require("chai")
const expect = chai.expect;
const reverseString = require('../problems/reverse-string')

describe("reverseString(string)", () => {
    it("should return the string in reverse order", () => {
        const str = "fun";
        const revStr = reverseString(str);

        expect(revStr).to.equal('nuf');
    })

    it("should throw an TypeError when invoked with a non-string argument", () => {
        const number = 5123;
        const array = [12, 2, 3]
        const object = { 12: 2, 3: 4 }

        expect(() => reverseString(number)).to.throw(TypeError)
        expect(() => reverseString(array)).to.throw(TypeError)
        expect(() => reverseString(object)).to.throw(TypeError)
    })
})
