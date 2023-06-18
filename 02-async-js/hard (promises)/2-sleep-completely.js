/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
  const start = Date.now();
  while (Date.now() < start + seconds * 1000) {
    // do nothing
  }
}

console.log('hello i am going to sleep now, time is \t' + new Date())

sleep(5);

console.log('hello i am awake now, time is\t\t' + new Date())