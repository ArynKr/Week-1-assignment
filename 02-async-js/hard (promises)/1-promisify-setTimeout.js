/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, n*1000);
  })
}

async function test(n) {
  const val = await wait(n);
  console.log(val);
}
test(7);