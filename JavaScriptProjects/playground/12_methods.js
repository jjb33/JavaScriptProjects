//Methods are functions that are stored as object properties. 

function person(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
      this.name = name;
    }
  }
  
  var p = new person("David", 21);
  p.changeName("John");
  //Now p.name equals to "John"

  //You can also define the function outside of the constructor function and associate it with the object.
  function person(name, age) {
    this.name= name;  
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  function bornYear() {
    return 2016 - this.age;
  }