setInterval(() => {
  console.clear();
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'pm' : 'am';
  console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
}, 1000);