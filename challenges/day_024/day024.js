function fft(input) {
  const N = input.length;
  
  if (N <= 1) {
      return input;
  }
  
  const even = [];
  const odd = [];
  
  for (let i = 0; i < N; i++) {
      if (i % 2 === 0) {
          even.push(input[i]);
      } else {
          odd.push(input[i]);
      }
  }
  
  const evenTransformed = fft(even);
  const oddTransformed = fft(odd);
  
  const result = [];
  for (let k = 0; k < N / 2; k++) {
      const exp = Complex.fromPolar(1, -2 * Math.PI * k / N);
      const term = exp.mul(oddTransformed[k]);
      result[k] = evenTransformed[k].add(term);
      result[k + N / 2] = evenTransformed[k].sub(term);
  }
  
  return result;
}

const input = [1, 2, 3, 4];
const Complex = require('complex.js'); 
const result = fft(input.map(val => new Complex(val, 0)));
console.log(result.map(val => val.toString()));
