const counterFn = (count = 1) => {
  console.log(count);
  setTimeout(() => {
    counterFn(count + 1);
  }, 1000)
}

counterFn();