const chai = require("chai")
const expect = chai.expect;

const Person = require('../problems/person')

describe("Person Class", () => {

    describe("Person Constructor", () => {
        it("should exist on an instance", () => {
            const person = new Person("Jim", 14);

            expect(person.name).to.exist;
            expect(person.age).to.exist;
        })
    })

    describe("sayHello()", () => {
        it("should return a string with the person's name and greeting message", () => {
            const person = new Person("Tiff", 20);
            const greeting = person.sayHello();

            expect(greeting).to.equal("Tiff, it's nice to meet you!")
        })
    })

    describe("visit(otherPerson)", () => {
        it("should return string of person 1 visiting person 2", () => {
            const person = new Person("Tiff", 20);
            const person2 = new Person("Tiffy", 25);
            const visiting = person.visit(person2);

            expect(visiting).to.equal("Tiff visited Tiffy")
        })
    })

    describe("switchVisit(otherPerson)", () => {
        it("should return string of person 2 visiting person 1", () => {
            const person = new Person("Tiff", 20);
            const person2 = new Person("Tiffy", 25);
            const visiting = person.switchVisit(person2);

            expect(visiting).to.equal("Tiffy visited Tiff")
        })
    })

    describe("update(obj)", () => {
        describe("Is not a valid object", () => {
            it("If the argument is not an object, throw a TypeError", () => {
                const origPerson = new Person("Tiff", 20);

                expect(() => origPerson.update(['name', "lulu", 'age', 57])).to.throw(TypeError)
            })

            it("If the incoming object does not have a name and age property, throw a TypeError", () => {
                const origPerson = new Person("Tiff", 20);

                expect(() => origPerson.update({ name: "lulu" })).to.throw(TypeError)
            })
        })

        describe("Is a valid object", () => {
            it("should update to match the passed-in object's values", () => {
                const origPerson = new Person("Tiff", 20);
                const updPerson = origPerson.update({ name: "lulu", age: 57 })

                expect(updPerson.name).to.equal("lulu")
                expect(updPerson.age).to.equal(57)
            })
        })

    })

    describe("tryUpdate(obj)", () => {
        describe("Invocation of update is successful", () => {
            it("should return true", () => {
                const origPerson = new Person("Tiff", 20);
                const updPerson = origPerson.tryUpdate({ name: "lulu", age: 57 })

                expect(updPerson).to.be.true;
            })
        })
        describe("Invocation of update was not successful", () => {
            it("should return false", () => {
                const origPerson = new Person("Tiff", 20);
                const updPerson = origPerson.tryUpdate(['name', "lulu", 'age', 57])

                expect(updPerson).to.be.false;
            })
        })
    })

    describe("greetAll(obj)", () => {
        it("should return an array of greeting messages for each Person instance", () => {
            const person1 = new Person("Tiff", 20);
            const person2 = new Person("Tiffles", 22);
            const person3 = new Person("Tiffy", 23);
            const person4 = new Person("Tiffu", 26);
            const greet = Person.greetAll([person1, person2, person3, person4])

            const expectedGreet = ["Tiff, it's nice to meet you!", "Tiffles, it's nice to meet you!",
                "Tiffy, it's nice to meet you!", "Tiffu, it's nice to meet you!"]

            expect(greet).to.deep.equal(expectedGreet)
        })

    })

})
