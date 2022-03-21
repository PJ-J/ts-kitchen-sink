const myName: string = "PJ";
const statesInUS: number = 50;
let add: number = 5 + 4;

let sayHello = () => {
  console.log("Hello World");
};
sayHello();

let checkAge = (name: string, age: number) => {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  }
};
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 21);
checkAge("John", 21);

let favVeggies: string[] = ["onion", "lettuce", "peppers", "potatoes"];

for (let i = 0; i < favVeggies.length;  i++) {
  console.log(favVeggies[i]);
}

interface Pet {
  name: string;
  breed: string;
}

let pet: Pet = { name: "Henry", breed: "Bengal Mix" };
console.log(pet);

interface IPerson {
  name: string;
  age: number;
}

let ppl: IPerson[] = [{ name: "Henry", age: 21 }, { name: "Jon", age: 17 }, { name: "Don", age: 33 }, { name: "Juan", age: 67 }, { name: "Glob", age: 12 }];

for (let i in ppl) {
  // console.log(checkAge(ppl[i].name, ppl[i].age));
}

let getLength = (word: string) => word.length;

let helloLength: number = getLength('Hello World');

if (helloLength % 2 === 0) {
  console.log('The world is nice and even!')
} else {
  console.log('The world is an odd place!');
}