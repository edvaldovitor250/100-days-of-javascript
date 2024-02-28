function lagrangeInterpolation(x, y, xi) {
    let n = x.length;
    let result = 0;
    
    for (let i = 0; i < n; i++) {
        let term = y[i];
        for (let j = 0; j < n; j++) {
            if (j !== i) {
                term *= (xi - x[j]) / (x[i] - x[j]);
            }
        }
        result += term;
    }
    
    return result;
}

let x = [1, 2, 4, 5];
let y = [3, 5, 7, 11];
let xi = 3; 

let interpolatedValue = lagrangeInterpolation(x, y, xi);
console.log("Valor interpolado em x =", xi, ":", interpolatedValue);
