const { Command } = require("commander");

const program = new Command();

program
  .name("spellchk")
  .option("-d, --dictionary")
  .argument("[string]")
  .action(async (text) => {
    if (!text) {
      let pipedData = '';
      process.stdin.setEncoding('utf8');
      
      for await (const chunk of process.stdin) {
        pipedData += chunk;
      }

      console.log(pipedData.trim())
    } else {
      console.log(text);
    }
  });

program.parse();

// console.log(program.args[0]);
