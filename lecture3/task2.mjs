import readline from "readline"
const program = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 })

 console.log("-------- To exit press 'Ctrl + C' --------")
 program.setPrompt("Please enter a sum of A and B in Roman: (A+B) ")
 program.prompt()

 program.on("line", (input) => {
      let splits = input.split("+", 2)
      const isRoman = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
      let arabicValues = []

      if (isRoman.test(splits[0]) && isRoman.test(splits[1])) {
         Object.values(splits).forEach((value) => {
            const translate = new Map()
            translate.set("I", 1).set("V", 5).set("X", 10).set("L", 50).set("C", 100).set("D", 500).set("M", 1000)
            let output = 0
            for (let letter = 0; letter < value.length; letter++) {
               if (letter != value.length - 1 && translate.get(value[letter]) < translate.get(value[letter+1])) {
                  output += translate.get(value[letter+1]) - translate.get(value[letter])
                  letter++
               } else {
                  output += translate.get(value[letter])
                  }
            }
            arabicValues.push(output)
         })
         let result = arabicValues.reduce((sum, current) => sum + current, 0)
         const thousands = ["", "M", "MM", "MMM", "MMMM"]
         const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
         const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
         const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
         let Roman = thousands[Math.floor(result/1000)] + hundreds[Math.floor((result%1000)/100)] + tens[Math.floor((result%100)/10)] + ones[result%10]
         console.log(`I speak Roman: ${Roman}\n`)  
      } else {
      console.log("Invalid input!\n")
      }
      program.prompt()
}).on("close", () => { 
   console.log("\n-------- Bye Bye --------")
})