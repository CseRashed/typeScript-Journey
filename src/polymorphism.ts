//Polymorphism is a core OOP concept where different classes use the same interface, allowing access to different types through the same interface.
class Person{
    getSleep(){
        console.log('I am a normal happy person. I slep for 8 hours')

    }
}

class Student extends Person {
    getSleep(){
        console.log('I am a Student. I sleep for 7 hours')
    }
}

class Developer extends Person{
    getSleep(){
    console.log('I am a developer. I am sleep for 5 hours')

    }
}

const sleepingHour=(params:Person)=>{
params.getSleep()
}

const person1=new Person;
const person2=new Student;
const person3= new Developer;
sleepingHour(person1)

class Shape{
    getArea():number{
        return 0
    }
}

class Circle extends Shape{
    // area=pi*r*r
    radius:number;
    constructor(radius:number){
        super()
        this.radius =radius;
    }
    getArea(): number {
       return Math.PI*this.radius*this.radius 
    }
}

class Rectangle extends Shape{
    // rectangle = height*width;
    height:number;
    width:number;
    constructor(height:number, width:number){
        super()
        this.height= height
        this.width=width;
    }
    getArea(): number {
        return this.height*this.width;
    }
}

const getArea=(params:Shape)=>{
    console.log(params.getArea())

}

const shape1=new Shape()
const shape2 =new Circle(4)
const shape3=new Rectangle(3,4)

console.log(getArea(shape3))