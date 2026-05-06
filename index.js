const { Command } = require("commander");
const word_list = require("./words_dictionary.json");
const program = new Command();
const getInput = require("./getInput");
// console.log(getInput);
// console.log(word_list);
program
  .name("spellchk")
  .option("-d, --dictionary")
  .argument("[string]")
  .action(async (text) => {
    const userInput = await getInput(text);
    const lines = userInput.split("\n");
    lines.map((line, index) => {
      console.log(`line ${index + 1} : ${line}`);
    });
  });

program.parse();

// console.log(program.args[0]);
