#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\t welcome to 'Code with Nida' - currancy convertor\n"));
//define the list of currencies and their exchange rates:
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYO": 112,
    "CAD": 2.3,
    "PKR": 277.70,
    // Add mode currencies and thire exchange rate here:
};
// promt the user to currencies to convert from and to:
let user_answer = await inquirer.prompt([
    {
        name: "from_currancy",
        type: "list",
        message: "select the ciurrency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "PKR"]
    },
    {
        name: "amount",
        type: " input",
        messege: "Enter the amount to convert:"
    },
]);
//perform currency conversion by using formula:
let from_amount = exchange_rate[user_answer.from_currancy];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// formula of conversion:
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// display the converted amount:
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
