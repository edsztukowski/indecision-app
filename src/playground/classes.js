class Person {
    constructor(name = 'Friend', age = "0") {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}, age ${this.age}`;
    }

    getDescription() {
        return `Hi, I am ${this.name}, age ${this.age}`;
    }

}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` major: ${this.major}`
        }

        return description;
    }
}

class Travelor extends Person {
    constructor(name, age, homeLocation) {
        super (name, age);
        this.homeLocation = homeLocation;
    }

    isTraveling() {
        return !!this.homeLocation;
    }

    getHomeLocation() {
        let home = super.getGreeting();

        if(this.isTraveling()) {
            home += ` and I'm visiting from ${this.homeLocation}`
        }
            return home;
    }

}

const me = new Travelor('Edward Sztukowski', 29);

console.log(me.getHomeLocation())