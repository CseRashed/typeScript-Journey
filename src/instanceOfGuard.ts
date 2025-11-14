//OOP => instance of guard / type narrowing

class Person{
    name:string
    constructor(name:string){
        this.name= name;
    }
    sleep(time:number){
        console.log(`${this.name} daily ${time} ghumay`)
    }
}

class Student extends Person{
    constructor(name:string){
        super(name)
    }
    toStudy(time:number){
        console.log(`${this.name} daily ${time} ghonta study kore`) 
    }
}

class Teacher extends Person{
    constructor(name:string){
        super(name)
    }
    takeClass(time:number){
        console.log(`${this.name} daily ${time} ghonta class ney`)
    }
}

const isStudent=(user:Person)=>{  //user is student return true/false
    return user instanceof Student
}
const isTeacher=(user:Person)=>{  //user is Teacher return trure /false
    return user instanceof Teacher
}


const getUserInfo=(user:Person)=>{
     if(isStudent(user)){
        user.toStudy(9)
     }else if(isTeacher(user)){
        user.takeClass(2)
     }else{
        user.sleep(3)
     }
}

const student1=new Student('Rased')
getUserInfo(student1)
const teacher1=new Teacher('ahmed')
getUserInfo(teacher1)