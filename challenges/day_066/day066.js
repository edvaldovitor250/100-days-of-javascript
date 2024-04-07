function isFibonacci(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let a = 0;
      let b = 1;
      while (b < number) {
        const temp = b;
        b = a + b;
        a = temp;
      }
      resolve(b === number);
    }, 1000);
  });
}

isFibonacci(8).then((isFibonacciNumber) => {
  console.log(isFibonacciNumber); 
});
