const accounts = {};

function createAccount() {
  const name = prompt("Enter User's name:");
  const balance = parseFloat(prompt("Enter initial balance:"));
  const accountNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
  accounts[accountNumber] = { name: name, balance: balance };
  console.log("Account created successfully!");
  console.log("Account number:", accountNumber);
}

function depositFunds() {
  const accountNumber = parseInt(prompt("Enter account number:"));
  if (accounts.hasOwnProperty(accountNumber)) {
    const amount = parseFloat(prompt("Enter deposit amount:"));
    accounts[accountNumber].balance += amount;
    console.log("Deposit successful. New balance:", accounts[accountNumber].balance);
  } else {
    console.log("Account not found.");
  }
}

function withdrawFunds() {
  const accountNumber = parseInt(prompt("Enter account number:"));
  if (accounts.hasOwnProperty(accountNumber)) {
    const amount = parseFloat(prompt("Enter withdrawal amount:"));
    if (amount <= accounts[accountNumber].balance) {
      accounts[accountNumber].balance -= amount;
      console.log("Withdrawal successful. New balance:", accounts[accountNumber].balance);
    } else {
      console.log("Insufficient balance.");
    }
  } else {
    console.log("Account not found.");
  }
}

function main() {
  while (true) {
    console.log("\nSelect the operation you want:");
    console.log("1. Create an account");
    console.log("2. Deposit funds");
    console.log("3. Withdraw funds");
    console.log("4. Exit");
    
    const choice = prompt("Enter your choice:");
    
    switch (choice) {
      case "1":
        createAccount();
        break;
      case "2":
        depositFunds();
        break;
      case "3":
        withdrawFunds();
        break;
      case "4":
        return;
      default:
        console.log("Invalid choice. Please select a valid option.");
    }
  }
}

main();
