const { Command } = require("commander");

const program = new Command();

program.name("spellchk").argument("<string>");

program.parse();

console.log(program.args[0]);
