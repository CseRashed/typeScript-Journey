// js nonPrimitve data types:
// Array, objet
// ts nonPrimitve data types:
// tuple
// -------js------
let marks:number[] = [23,3,24,54,35,56]
marks[2] =10
// ------ts----
let student:[string,number] =['Rashedul', 3.78]
student.push()

const user:{
    organization:'hellow world'
    firstName:string,
    middleName?:string,  //optional type
    lastName:string
}={
    firstName:'Md',
    lastName:'Islam',
    organization:'hellow world'
}
console.log(user.firstName)