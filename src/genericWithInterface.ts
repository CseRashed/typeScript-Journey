interface Develper<T>{
    name:string;
    salary:number;
    device:{
        brand:string;
        model:string;
        realisedYear:string;
    };
    smartWatch:T
}

const poorDeveloper:Develper<{
    heartRate:string;
    stopWatch:boolean
}>={
    name:'Rasheul',
    salary:30,
    device:{
        brand:'nola',
        model:'na',
        realisedYear:'2020'
    },
    smartWatch:{
        heartRate:'150',
        stopWatch:true
    }
    

}

const richDeveloper:Develper<{
    aifeature:boolean;
    fitness:boolean;
}>={
    name:'Mim',
    salary:3400,
    device:{
        brand:'HP',
        model:'Hp elite Book',
        realisedYear:'2020'
    },
    smartWatch:{
        aifeature:true,
        fitness:true
    }
}