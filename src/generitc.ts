//dynamically generalize

type GenericArray<value>=Array<value>;

//const friends: string[]= ['Mehedi', 'Jihad', 'Opurbo'];
const friends:GenericArray<string> = ['Mehedi', 'Jihad', 'Opurbo'];

// const rollNo:number[]= [2,3,4];
const rollNo:GenericArray<number>= [2,3,4];

// const isEligible:boolean[]= [true, false, true];
const isEligible:GenericArray<boolean>= [true, false, true];

type Coordinate<X, Y>=[X, Y]

const coordinate1: Coordinate<number, number> =[20, 25]
const coordinate2: Coordinate<string, string> =['20', '25']

// generic with types.
type value ={name:string,age:number}

const userList:GenericArray<value>=[
    {
        name:'Rashedul',
        age:33
    },
    {
        name:'Rashedul',
        age:44
    },
]