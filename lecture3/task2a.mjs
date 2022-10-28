import readline from "readline"
const program = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 })

 console.log("-------- To exit press 'Ctrl + C' --------")
 program.setPrompt("Please enter a number: (1-2000) ")
 program.prompt()
 program.on("line", (input) => {
   let value = Number(input.trim())
   let isNumber = !isNaN(value)
   let isInRange = 0 < value && value <= 2000
   if (isNumber && isInRange) {
      const thousands = ["", "M", "MM"]
      const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
      const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
      const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
      let Roman = thousands[Math.floor(value/1000)] + hundreds[Math.floor((value%1000)/100)] + tens[Math.floor((value%100)/10)] + ones[value%10]
      console.log(`I speak Roman: ${Roman}`)
   } else {
      console.log("Invalid input!\n")
   }
   program.prompt()
 }).on("close", () => {
   console.log("\n-------- Bye Bye --------");
 });
