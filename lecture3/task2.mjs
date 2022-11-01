import readline from "readline"
const program = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 })

 console.log("-------- To exit press 'Ctrl + C' --------")
 program.setPrompt("Please enter a sum of A and B in Roman: (A+B) ")
 program.prompt()

 program.on("line", (input) => {
   try {
      let splits = input.split("+", 2)
      const isRoman = /^M{0,2}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/

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
            console.log(output)
            return output
         })   
      } else {
      console.log("Invalid input!\n")
      }
   program.prompt()
   } catch (error) {
      console.log("Invalid input!\n", error)
      program.prompt()
   }
}).on("close", () => { 
   console.log("\n-------- Bye Bye --------")
})

//Object.entries(splits).forEach(([key ,value]) => {}
   

 //  let value = Number(input.trim())
// //  //  let isInRange = 0 < value && value <= 2000
// //    if (isNumber && isInRange) {
// //       const thousands = ["", "M", "MM"]
// //       const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
// //       const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
// //       const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
// //       let Roman = thousands[Math.floor(value/1000)] + hundreds[Math.floor((value%1000)/100)] + tens[Math.floor((value%100)/10)] + ones[value%10]
// //       console.log(`I speak Roman: ${Roman}`)
// //    } else {
// //       console.log("Invalid input!\n")
// //    }
//    program.prompt()
//  }).on("close", () => {
//    console.log("\n-------- Bye Bye --------");
//  });
