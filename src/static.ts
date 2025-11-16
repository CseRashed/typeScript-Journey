//

//normal 
class Counter{
    counter:number =0
    increment(){
        return this.counter=this.counter +1;
    }
    decrement(){
        return this.counter =this.counter-1;
    }
}

const result =new Counter()
console.log(result.increment())
console.log(result.increment())
console.log(result.increment())
const result2=new Counter()
console.log(result2.increment())
console.log(result2.increment())
// output: 1,2,3,1,2 
// ------------------------------------ 

// static 

class Counter2{
    static counter:number =0
    increment(){
        return Counter2.counter=Counter2.counter +1;
    }
    decrement(){
        return Counter2.counter =Counter2.counter-1;
    }
}

const res=new Counter2()
console.log(res.increment())
console.log(res.increment())

const res2=new Counter2()
console.log(res.increment())
console.log(res.increment())
// outpur: 1,2,3,4; 
