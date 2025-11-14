//inheritance is a super power class. when any clsses property use other class is called inheritance

class Parent{
 name:string; 
    age:number; 
    address:string; 
    constructor(name:string, age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    getSleep(time:number){ 
        console.log(`${this.name} eni ${time} ghonta ghuay`)
    }
}

class Student extends Parent{}  

const student1=new Student('Rashedul',22,'Dinajpur')
student1.getSleep(12)



class Teacher extends Parent{
    designation:string; //own propertie
    constructor(name:string,age:number,address:string,designation:string){
       super(name, age, address)  //Parent constractor must initial and firsht
        this.designation=designation 
    }
    takeClass(time:number){    //own propertie
        console.log(`${this.name} ${time} ghonta class ney`)
    }
}

const teacher1=new Teacher('Islam',30,'Dhaka','teacher ')
teacher1.takeClass(4)



