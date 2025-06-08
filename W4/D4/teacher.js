/** Asyc in JS */

// function getX() {
//   setTimeout(() => {
//     return 5;
//   }, 2 * 1000);
// }

// function getY() {
//   return 6;
// }

// function getXY() {
//   let x = getX();
//   console.log("x=>", x);
//   let y = getY();
//   console.log("y=>", y);
//   console.log("x + y =>", x + y);
// }

// setTimeout(() => {
//   console.log('hi');
// },2000)

// console.log('before');
// getXY()
// console.log('after');

/** Callback */
function myCallback() {
  console.log("my callbak executed!!!");
}

function execCallback(func) {
  func();
}

// execCallback(() => {
//   console.log('my callbak executed!!!');
// })

function getX(callback) {
  setTimeout(() => {
    callback(5);
  }, 2 * 1000);
}

/** will wait 5 * 1000 */
function getY(callback) {
  setTimeout(() => {
    callback(6);
  }, 5 * 1000);
}

function getXY() {
  getX((x) => {
    console.log("x=>", x);
    getY((y) => {
      console.log("y=>", y);
      console.log("x + y=>", x + y);
    });
    // const y = getY();
    // console.log("y=>", y);
    // console.log("x + y=>", x + y);
  });
}

// getXY();

// const x =  (x) => {
//   console.log('x=>', x);
//  }
//  x(5)

// ((y)=>{
//   console.log("y=>", y);
// })(6)

/** Make tea */
/** takes 5 sec */
function boilWater(f) {
  console.log("Boiling water...");
  setTimeout(() => {
    f("hot water");
  }, 5 * 1000);
}
/** takes 2 sec */
function getTeaBag(f) {
  console.log("Getting a teabag...");
  setTimeout(() => {
    f("green tea");
  }, 2 * 1000);
}
/** takes 1 sec */
function makeTea(water, tea, f) {
  console.log("Making a nice cup of tea...");
  setTimeout(() => {
    f(`A nice cup of ${tea} with ${water}`);
  }, 1 * 1000);
}

function prepareTea() {
  boilWater((water) => {
    console.log("water=>", water);
    getTeaBag((tea) => {
      // console.log('tea=>', tea);
      makeTea(water, tea, (make) => {
        console.log(make);
      });
    });
  });
  // const water = boilWater();
  // console.log("water=>", water);
  // const tea = getTeaBag();
  // console.log("tea=>", tea);
  // const cup = makeTea(water, tea);
  // console.log(cup);
}

// prepareTea();

/* Promises */

/** pending */
/** fullfiled - resolve */
/** fullfiled- reject */

let promise1 = new Promise((resolve, reject) => {
  resolve("hot water");
  // reject('cold water')
});

// console.log("promise1=>", promise1);

// promise1.then((a) => {
//   return 'wow, ' + a;
// })
// .then(a => {
//   return a + '!!!!';
// })
// .then(b => {
//   console.log(b);
// })
// .catch(e => {
//   console.log(e);
// })

// let p = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej(5);
//   }, 5 * 1000);
// });

// console.log(p);

// p.then((val) => {
//   console.log(val);
// }).catch((e) => {
//   console.log(e);
// });

// function getMyX() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(6);
//     }, 5 * 1000);
//   });
// }

// function getMyY() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(5);
//     }, 2 * 1000);
//   });
// }

// function getMyXY() {
//   getMyX()
//     .then((x) => {
//       console.log("x=>", x);

//       getMyY()
//         .then((y) => {
//           console.log("y=>", y);

//           console.log("x + y=>", x + y);
//         })
//         .catch((e) => console.log(e));
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }

// getMyXY();

const flip = () => {
  const coin = Math.floor(Math.random() * 2);
  return coin === 0 ? "head" : "tail";
};

// const filpcoin = new Promise((res, rej) => {
//   setTimeout(() => {
//     const result = flip();
//     if (result === "head") {
//       res("you win => " + result);
//     } else {
//       rej("you lose => " + result);
//     }
//   }, 3 * 1000);
// });

// console.log(filpcoin);
// filpcoin
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });

/** Promis static methods */

/** Promis.resolve / Promise.reject */

// console.log(Promise.resolve(5));

function _getX() {
  return Promise.resolve(5);
}

// _getX().then(val => console.log(val))

function getNum(num) {
  if (num) return Promise.resolve(num);
  else return Promise.reject(-1);
}

// getNum()
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Promise.all(arrayOfPromises)
// Promise.allSettled(arrayOfPromises)
// Promise.race(arrayOfPromises)
// Promise.any(arrayOfPromises);

const p1 = Promise.resolve("resove promise 1");
// const p2 = Promise.resolve("resove promise 2");
// const p2 = Promise.reject("reject promise 2");
const p3 = Promise.resolve("resove promise 3");

// let arrayOfPromises = [p2, p1, p3];
// console.log(arrayOfPromises);

// Promise.all(arrayOfPromises)
// Promise.any(arrayOfPromises)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
