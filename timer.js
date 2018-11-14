// function callback(err, result) {
//   if (err) {
//     throw Error();
//   }
//   console.log(result);
//   return result;
// }

// setTimeout(() => {
//   let response = { test: 'ok' }

//   return callback(null, response)
// }, 1000)


var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject({ err: 'err' }), 10);
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value);
  // Both resolve, but promise2 is faster
})
  .catch(err => {
    console.log(err)
  })

var promise3 = new Promise((resolve, reject) => {
  reject({ err: 'err' });
})

promise3.catch(err => {
  console.log('===============>here', err);
})