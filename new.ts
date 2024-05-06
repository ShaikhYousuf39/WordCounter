import inquirer from "inquirer";

const ans :{
    sent : string;
} = await inquirer.prompt([
    {
        type : "input",
        name : "sent",
        message : "Enter the sentence : "
    }
]);


const complete = ans.sent.trim().split(" ");
console.log(complete)

console.log(`Your Sentence Have ${complete.length} words.`)