function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
    this.age="unknown";
    this.gender="unknown";
    this.occupation="unknown";
    this.location="unknown";
    this.nationality="unknown";
    this.qualification="unknown";
}

var person1 = new Person();
person1.firstName = "Brinda";
person1.lastName = "G";
person1.age="21";
person1.gender="Female";
person1.occupation="Software Engineer";
person1.location="XXYYYZZ";
person1.nationality="Indian";
person1.qualification="BTech IT";
        
console.log(person1.firstName + " " + person1.lastName+" "+person1.age+" "+person1.gender+" "+person1.occupation+" "+person1.location+" "+person1.nationality+" "+person1.qualification);


