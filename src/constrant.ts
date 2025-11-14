// constant-------set the rules

type Student={id:number,name:string} //using type for clean code structure
                            //  force must have id and name this is constaint
const addStudentToCourse=<T extends Student>(studentInfo:T)=>{
    return {
        Nationality:'Bangladesh',
        ...studentInfo
    }
};

const student1={
    name:'Rasheul',
    id:234,
    isPen:true
}

const student2={
    id:345,
    name:'Islam',
    isCare:true,
    isMaried:true 
}

const student3={
    id:34,
    name:'mim',
    smartWatch:true,
    
    
}

const result1=addStudentToCourse(student1);
console.log(result1)

const result2=addStudentToCourse(student2);
console.log(result2)

const result3=addStudentToCourse(student3)
console.log(result3)