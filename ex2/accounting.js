class Account {
  constructor(owner, accountTotal = 0.00) {
    this.owner = owner;
    this.accountTotal = accountTotal;
  }
  credit = (amount) => {
    this.accountTotal += amount;
  }
  describe = () => {
    return this.owner, `Balance: ${this.accountTotal}`;
  }
}