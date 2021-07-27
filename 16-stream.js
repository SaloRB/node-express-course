const { createReadStream } = require("fs")

// default 64kb
// last buffer - remainder
// higherWaterMark - control size
// const stream = createReadStream('./content/big.txt, { hightWaterMark: 90000 })
// const stream = createReadStream('./content/big.txt, { encoding: 'utf8' })
const stream = createReadStream("./content/big.txt")

stream.on("data", (result) => {
  console.log(result)
})

stream.on("error", (err) => console.log(err))
