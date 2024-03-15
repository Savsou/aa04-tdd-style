class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;


  }

  sayHello() {
    return `${this.name}, it's nice to meet you!`
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
  }

  switchVisit(otherPerson) {
    return `${otherPerson.name} visited ${this.name}`
  }

  update(obj) {
    if (typeof obj !== 'object') {
      throw new TypeError("This is not an object")
    }

    if (obj.name === undefined || obj.age === undefined) {
      throw new TypeError("The name or age was not given")
    }

    this.name = obj.name
    this.age = obj.age
    return this;
  }

  tryUpdate(obj) {
    try {
      this.update(obj)
      return true;
    } catch (e) {
      return false;
    }

  }

  static greetAll(obj) {
    return obj.map(person => person.sayHello())
  }

}

module.exports = Person;
