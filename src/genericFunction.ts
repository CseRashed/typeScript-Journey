// generic Function Concept-----------


// normall function---------------
const createArryWithString=(value:string)=> [value]

const createArryWithNumber=(value:number)=> [value]

const createArryWithUserObj=(value:{id:number,name:string})=>
    {
    return [value]
    }

const arrString=createArryWithString('rahedul')

const arrNumber= createArryWithNumber(30)

const arrObj=createArryWithUserObj({id:23,name:'Rashedul'})
// ------------------------------------------------------------

// generic Funcition-----------------

const createArrayWithGeneric=<T>(value:T)=>[value]

const stringWithGeneric=createArrayWithGeneric('rahedul')

const numberWithGeneric= createArrayWithGeneric(30)

const objWithGeneric=createArrayWithGeneric({id:23,name:'Rashedul'})
// -------------------------------------------------------------------------

// tuple --------

const createArrayWithTuple=(value1:string,value2:string)=>[value1,value2]

const createArrayTupleWithGeneric=<X,Y>(value1:X,vaule2:Y)=>[value1,value1]

const res1=createArrayTupleWithGeneric('Rasedul',20)
const res2=createArrayTupleWithGeneric(24,true)


const addStudentToCourse=<T>(studentInfo:T)=>{
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

const result1=addStudentToCourse(student1);
console.log(result1)

const result2=addStudentToCourse(student2);
console.log(result2)