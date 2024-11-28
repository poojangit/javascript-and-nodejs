//todo -----------OBJECTS---------------

//& Javascript object is an entity having state and behaviour

//^ Prototypes
//& Javascript objects have a special property called prototypes.

const student = {
    sName : "Pooja",
    age : 20,
    marks : 100,
    printMarks : function (){
        console.log(`Marks is ${this.marks}`);
    }
}
console.log(student);
student.printMarks()

