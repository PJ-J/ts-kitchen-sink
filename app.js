var myName = "PJ";
var statesInUS = 50;
var add = 5 + 4;
var sayHello = function () {
    console.log("Hello World");
};
sayHello();
var checkAge = function (name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
};
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 21);
checkAge("John", 21);
var favVeggies = ["onion", "lettuce", "peppers", "potatoes"];
for (var i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
}
var pet = { name: "Henry", breed: "Bengal Mix" };
console.log(pet);
var ppl = [{ name: "Henry", age: 21 }, { name: "Jon", age: 17 }, { name: "Don", age: 33 }, { name: "Juan", age: 67 }, { name: "Glob", age: 12 }];
for (var i in ppl) {
    // console.log(checkAge(ppl[i].name, ppl[i].age));
}
var getLength = function (word) { return word.length; };
var helloLength = getLength('Hello World');
if (helloLength % 2 === 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
