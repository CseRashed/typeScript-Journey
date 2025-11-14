// keyof ==========> type operator that give me all keys in obj

type RichPeopleVehicle={
    car:string,
    bike:string,
    cng:string
}

type myVehicle1= 'car'|'bike'|'cng';

type myVehicle2 = keyof RichPeopleVehicle; //myVehicle2= car,bike,cng store key of richpeoplevehilce
const myVehicle:myVehicle1='cng'

type User={
    id:number;
    name:string;
    address:{

        city:string
    }
}

const user:User={
    id:434,
    name:'Rashedul',
    address:{
        city:'Rangpur'
    }
}

const myId=user['id'];
const myName=user['name'];
const myAddress=user['address']

// console.log(myId,myName,myAddress)


const product={  //product obj
    brand:'Hp',
    model:'Elitebook',
    price:3383
}


const student ={   //student obj
    name:'Rashedul',
    roll:345,
    address:'Dinajpur'
}
const getPropertyFromObj= <X>(obj:X,key:keyof X)=>{ //using generic for all kind of obj
    return obj[key]
}

const userResult =getPropertyFromObj(user,'name') 
console.log(userResult)

const productResult=getPropertyFromObj(product,'brand')
console.log(productResult)

const studentResult=getPropertyFromObj(student,'address')
console.log(studentResult)



