// encapsulation=====>that involves bundling data and the methods that operate on that data into a single unit (a class), while restricting direct access to the internal state. 

class BankAccount{
    readonly userId:number; //
    userName:string;
    private userBalance:number;
    constructor(userId:number,userName:string,userBalance:number){
        this.userId=userId;
        this.userName=userName;
        this.userBalance=userBalance;
    }
    private addBalance(balance:number){            //this method use for this class not outer world
        this.userBalance=this.userBalance +balance
    }

    hidden(balance:number){        //privet method or property used outer world
        this.addBalance(balance)
    }

}

const rashedAccount=new BankAccount(124,'Rashedul', 50)
// rashedAccount.addBalance(50)
rashedAccount.hidden(30)
console.log(rashedAccount)
