import inqurier from "inquirer";
const currency = {
    USD: 1, // BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.54,
    PKR: 280,
};
let user_answer = await inqurier.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        messsage: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD BASE CURRENCY
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
