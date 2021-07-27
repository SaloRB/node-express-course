const { writeFileSync } = require("fs")
for (let i = 0; i < 100000; i++) {
  writeFileSync("./content/big.txt", `hello world ${i+1}\n`, { flag: "a" })
}
