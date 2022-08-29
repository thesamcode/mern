class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    sendMoney(amount, targetPerson){
        this.wallet -= amount;
        targetPerson.receiveMoney(amount);
    }

    receiveMoney(amount){
        // if (condition){

        // }
        this.wallet += amount;

    }
}

//Teacher IS A Person - Inheritance
class Teacher extends Person {
    constructor(firstName, lastName, yearsTeachingExperience){
        // super refers to the parent constructor, in this case that is Person
        // we send all the Person-specific data to the person class
        super(firstName, lastName);

        //Teacher-specific properties
        this.yearsTeachingExperience = yearsTeachingExperience

    }
}
class Student extends Person {
    constructor(firstName, lastName, hobbies = []){
        super(firstName, lastName);

        this.hobbies = hobbies;
    }

}

//Lecture HAS A Teacher - Composition
class Lecture {
    constructor(topic, zoomLink, teacher, students = []){
        this.topic = topic;
        this.zoomLink = zoomLink;
        this.teacher = teacher;
        this.students = students;
    }

    //method

    createAttendanceList(){
        const fullNames = [];

        for(const student of this.students){
            fullNames.push(student.fullname())
        }

    }
}

// the stuff in parenthesis passes in arguments to the constructor. Use the parenthesis to execute the function or method.
const neil = new Teacher('Neil', 'M', 3);
console.log(neil.fullName());

const joshua = new Student ('Joshua', 'Diaz');
console.log(joshua.fullName());

const oopLecture = new Lecture(
    'OOP Intro',
    'https://codingdojo...',
    neil,
    [joshua, new Student('yelena', 'Dovgal')]
);

const jimsLecture = new Lecture(
    'Cool stuff',
    'foo',
    new Teacher('Jim', 'R', 2),
    [joshua]
);

//functional programming

const goodBoy = {
    firstName: 'Buddy',
    lastName: 'Smith',
};

function fullName(objectWithNames){
    return objectWithNames.firstName + ' ' + objectWithNames.lastName;
}

console.log(fullName(goodBoy));
console.log(fullName(joshua));

console.log(oopLecture);
console.log(oopLecture.createAttendanceList());

// student is sendimg money to teacher both they are both people so they inherit methods
joshua.sendMoney(10, neil);
neil.sendMoney(5, joshua);

console.log(neil);
console.log(joshua);