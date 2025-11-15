// getter =build in method but using same a properti. using for get value.
// setter = build in method but using same as property. usign for set value.

class BankAccount{
    readonly userId:number; //
    userName:string;
    private userBalance:number;
    constructor(userId:number,userName:string,userBalance:number){
        this.userId=userId;
        this.userName=userName;
        this.userBalance=userBalance;
    }
    // addBalance(balance:number){ //set balance
    //     this.userBalance=this.userBalance +balance
    // }
    

    // set balance using setter 
    set addBalance (amount:number){
        this.userBalance=this.userBalance +amount;
    }

  get getBalance(){
    return this.userBalance;
  }
}

const rashedAccount=new BankAccount(124,'Rashedul', 50)
rashedAccount.addBalance=30
console.log(rashedAccount.getBalance
)
console.log(rashedAccount)
