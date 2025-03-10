// const promise = new Promise((resolve, reject) => {
//     const result = false

//     if (result) {
//         resolve("Promise resolved")
//     } else {
//         reject("Promise rejected")
//     }
// })


// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((result) => {
//         console.log(result);
//     })


// console.log(1)

// setTimeout(() => {
//     console.log(3)
// },0)

// const promise = new Promise((resolve, reject) => {
//     console.log(4)
//     resolve(5)
// })

// promise
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// console.log(2)



// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise resolved"), 4000
//     })
// });

// async function asyncFunc() {
//     let result = await promise

//     console.log(result);
// }

// asyncFunc()