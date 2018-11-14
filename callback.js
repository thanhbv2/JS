function add(a, b, cb) {

  setTimeout(() => cb(false, a + b), 100)
}

function mutip(a, b, cb) {
  setTimeout(() => cb(false, a * b), 100)
}

function division(a, b, cb) {
  setTimeout(() => cb(false, a / b), 100)

}

let x = add(1, 2, (err, resAdd) => {
  console.log('===============>', resAdd);
  mutip(resAdd, 2, (err, resMutip) => {
    console.log('===============>', resMutip);
    division(resMutip, 2, (err, res) => {
      return new Promise((resolve, reject) => {
        resolve(res)
      })
    })
  })
})

console.log('===============>', x);