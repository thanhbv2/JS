const fs = require('fs')

setTimeout(() => {
  console.log('===============>time out 1', );
  setImmediate(() => {
    console.log('===============>setInme 1', );
  })
}, 0)


setTimeout(() => {
  console.log('===============>time out 2', );
  setImmediate(() => {
    console.log('===============>setInme 2', );
  })
}, 0)

setTimeout(() => {
  console.log('===============>time out 3', );
}, 0)

fs.open(`${__dirname}/input.txt`, 'r+', (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
})