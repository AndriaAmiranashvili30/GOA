
import random

accounts = {}

def create_account():
    global accounts
    name = input("Enter User's name: ")
    balance = float(input("Enter initial balance: "))
    account_number = random.randint(1000000000, 9999999999)
    accounts[account_number] = {'name': name, 'balance': balance}
    print("Account created successfully!")
    print("Account number:", account_number)

def deposit_funds():
    account_number = int(input("Enter account number: "))
    if account_number in accounts:
        amount = float(input("Enter deposit amount: "))
        accounts[account_number]['balance'] += amount
        print("Deposit successful. New balance:", accounts[account_number]['balance'])
    else:
        print("Account not found.")

def withdraw_funds():
    account_number = int(input("Enter account number: "))
    if account_number in accounts:
        amount = float(input("Enter withdrawal amount: "))
        if amount <= accounts[account_number]['balance']:
            accounts[account_number]['balance'] -= amount
            print("Withdrawal successful. New balance:", accounts[account_number]['balance'])
        else:
            print("Insufficient balance.")
    else:
        print("Account not found.")

def main():
    while True:
        print("\nSelect the operation you want:")
        print("1. Create an account")
        print("2. Deposit funds")
        print("3. Withdraw funds")
        print("4. Exit")
        
        choice = input("Enter your choice: ")
        
        if choice == "1":
            create_account()
        elif choice == "2":
            deposit_funds()
        elif choice == "3":
            withdraw_funds()
        elif choice == "4":
            break
        else:
            print("Invalid choice. Please select a valid option.")

if __name__ == "__main__":
    main()
