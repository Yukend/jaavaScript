
class Student {
    constructor(name, age, sex, address) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.address = address;
    }

    Organisation() {  // method
        return ("Yuken")
    }

    static Add() {   // we can use this without creating a new instance
        return ("some" + "some")
    }
}

var student1 = new Student("yuki", 22, "male", "blablabla")

class Bag extends Student {
    
    constructor(name, age, sex, address, bagName, books) {

        super(name, age, sex, address);
        this.books = books;
        this.bagName = bagName;
    }
}

console.log(student1)

console.log(Student.Add())