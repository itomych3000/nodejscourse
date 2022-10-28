import readline from "readline"
const program = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 })

console.log("To exit press 'Ctrl + C'")
program.setPrompt("Please type 2-digits: (10-99) ")
program.prompt()
program.on("line", (input) => {
   let isTwoDigits = /^[1-9][0-9]$/.test(input.trim())
   switch (isTwoDigits) {
      case true:
         console.log(`Your digits are: ${input[0] + " and " + input[1]} \n`)
         break;
      default:
         console.log("Invalid input!\n")
         break;
   }
   program.prompt()
}).on("close", () => {
   console.log("\nBye Bye");
 });
