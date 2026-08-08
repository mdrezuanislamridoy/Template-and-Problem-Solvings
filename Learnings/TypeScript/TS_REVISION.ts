// Basics 

// Type...... eg: const variableName: type = value;
const message: string = "Hello, TypeScript!";
console.log(message);

// Interface...... eg: interface InterfaceName { propertyName: type; }
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Alice",
    age: 30
};

console.log(person);

// Function...... eg: function functionName(paramName: type): returnType { ... }
function greet(person: Person): string {
    return `Hello, ${person.name}!`;
}

console.log(greet(person));

// Class...... eg: class ClassName { propertyName: type; methodName(): returnType { ... } }
class Animal {
    species: string;

    constructor(species: string) {
        this.species = species;
    }

    makeSound(): void {
        console.log(`${this.species} makes a sound.`);
    }
}

const dog = new Animal("Dog");
dog.makeSound();

// 