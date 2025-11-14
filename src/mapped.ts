// mapped type
// map

const arrayOfNumber:number[]=[4,5,6,7,];

const arrayOfString:string[]=['4','5', '6']

const arrayOfStringUsingMap=arrayOfNumber.map((num)=>num.toString())
console.log(arrayOfStringUsingMap)

type AreaOfNumber={
    height:number;
    width:number
}
// type AreaOfString={
//     height:string;
//     width:string
// }

type Area<T>={
    [key in keyof T]:T[key];
}
/*
T={height:string, widht:number}
key=height, widht
T[key]=string, number

*/

const area1:Area<{height:string, widht:number}>={height:'20', widht:90}