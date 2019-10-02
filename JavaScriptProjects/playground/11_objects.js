//variables are containers for values
//objects are containers for multiple values

var person = {
 name: "John", age: 31, 
 favColor: "green", height: 183
};
var x = person.age;
var y = person['age'];

//length also makes an appearance:
len = person.age.length

//the above 'person' only creates a single person.
//we can create an object type with an object constructor:
function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}
//The this KEYWORD refers to the current object. like self in Python

var p1 = new person("Jason", "42", "green");
var p2 = new person("John", "50", "orange");

//p1 and p2 are now objects of the person type. Their properties are assigned to the corresponding values.
