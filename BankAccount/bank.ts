class BankAccount{
    accountNumber: number;
    owner: string;
    balance: number;

      deposit(amount: number): void {
    if (amount <= 0) {
      console.error("Deposit amount must be greater than zero.");
      return;
    }
    this.balance += amount;
    console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
  }



   withdraw(amount: number): void {
    if (amount <= 0) {
      console.error("Withdrawal amount must be greater than zero.");
      return;
    }
    if (amount > this.balance) {
      console.error("Insufficient funds.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrawn: ${amount}. New Balance: ${this.balance}`);
  }


  checkBalance(): number {
    return this.balance;
  }
    
}



class SavingsAccount extends BankAccount {
  interestRate: number;

  constructor(interestRate: number) {
    super();
    this.interestRate = interestRate;
  }


   applyInterest(): void {
    const interest = this.balance * (this.interestRate / 100);
    this.balance += interest;
    console.log(`Interest of ${interest} applied. New Balance: ${this.balance}`);
  }
}

console.log("Testing Bank Accounts...");


const bankAccount = new BankAccount();
bankAccount.accountNumber = 1001;
bankAccount.owner = "Alice";
bankAccount.deposit(1000);
bankAccount.withdraw(300);
console.log(`Alice's Final Balance: ${bankAccount.checkBalance()}\n`);






const savingsAccount = new SavingsAccount(5);
savingsAccount.accountNumber = 2001;
savingsAccount.owner = "Bob";
savingsAccount.deposit(2000);
savingsAccount.applyInterest();
console.log(`Bob's Final Balance: ${savingsAccount.checkBalance()}`);