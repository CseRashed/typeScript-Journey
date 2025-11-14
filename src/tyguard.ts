// typguard======>\
// typeof 
type Alphabetic=number|string;
const add= (num1:Alphabetic, num2:Alphabetic)=>{
    if(typeof num1 ==='number' && typeof num2 ==='number'){
        return num1+num2
    }else{
       return num1.toString()+num2.toString()
    }
}

add('2',3)
add(2,'3')
add('4','7')
add(4,1)

// in guard

type NormlUser={
    name:string
}
type AdminUser={
    name:string;
    roll:string
}

const getUserInfo=(user:NormlUser|AdminUser)=>{
    if('role' in user){

        console.log(`${user.name} his role is : ${user.role}`)
    }else{
        console.log(`${user.name}`)
    }
}

getUserInfo({name:'Rashed' ,role:'admin'})