// access =========>modifier  public, privet, protected
/*
ReadOnly = readOnly is a modifier that provide just read only power 
publict= he public modifier in TypeScript defines a class member (property or method) that is accessible from anywhere. This includes within the class where it is defined, outside the class, and in any derived classes (subclasses). 
privet=private members cannot be accessed or modified from outside the class, including instances of the class and derived classes. 
protective= It provides a level of access that is more restrictive than public but less restrictive than private.

**/
class BankAccount{
    readonly userId:number; //
    userName:string;
    private userBalance:number;
    constructor(userId:number,userName:string,userBalance:number){
        this.userId=userId;
        this.userName=userName;
        this.userBalance=userBalance;
    }
    addBalance(balance:number){
        this.userBalance=this.userBalance +balance
    }

}

const rashedAccount=new BankAccount(124,'Rashedul', 50)
rashedAccount.addBalance(50)
console.log(rashedAccount)
