class BankAccount {
  constructor(type, money) {
    this.type = type;
    this.money = money;
  }
  withdraw(amount) {
    BankAccount.transactionHistory("withdraw", amount);
    this.money = Number(this.money) - Number(amount);
  }
  deposit(amount) {
    BankAccount.transactionHistory("deposit", amount);
    this.money = Number(this.money) + Number(amount);
  }
  showBalance() {
    console.log(`Account Balance: ${this.money}`);
  }
  static transactionHistory(action, amount) {
    if (action === "withdraw") {
      console.log(`Money decreased by $${amount}`);
    } else if (action === "deposit") {
      console.log(`Money increased by $${amount}`);
    }
  }
}

const kyleAcct = new BankAccount("checking", 0);

kyleAcct.deposit(100);
kyleAcct.withdraw(50);
kyleAcct.showBalance();
