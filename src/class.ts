// OOP ==========> class
//class is like a blue print it should provide a data structure thak make different differnt data same structure 

//parameter properties===> this system is initalize and value set automatically so code will be clean 
class Animal{
    // name:string
    // species:string      if parameter properties used so that not to be initilazed for manually
    // sound:string
    constructor(public name:string,public species:string,public sound:string){ //parameter properties = just (set public)
        // this.name=name;
        // this.species=species;        if parameter properties used so that not to be initilazed for manually
        // this.sound=sound
    }
    
    makeSound(){  //any function defice in obj this function is called a method 
        console.log(`${this.name} is making sound ${this.sound}`)
    }
}

// animall-1
const dog=new Animal('dogesh vai','dog','ghew ghew')
console.log(dog)
dog.makeSound()

//animall-2
const cat =new Animal('cat vai', 'cat', 'mew mew')
console.log(cat)

cat.makeSound()