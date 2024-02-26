function luDecomposition(matrix) {
    const n = matrix.length;
    const lower = [];
    const upper = [];

    for (let i = 0; i < n; i++) {
        lower.push([]);
        upper.push([]);
        for (let j = 0; j < n; j++) {
            lower[i][j] = 0;
            upper[i][j] = 0;
        }
    }

    for (let i = 0; i < n; i++) {
        lower[i][i] = 1;

        for (let j = i; j < n; j++) {
            let sum = 0;
            for (let k = 0; k < i; k++) {
                sum += (lower[i][k] * upper[k][j]);
            }
            upper[i][j] = matrix[i][j] - sum;
        }

        for (let j = i + 1; j < n; j++) {
            let sum = 0;
            for (let k = 0; k < i; k++) {
                sum += (lower[j][k] * upper[k][i]);
            }
            lower[j][i] = (matrix[j][i] - sum) / upper[i][i];
        }
    }

    return { lower: lower, upper: upper };
}

const matrix = [
    [2, -1, 3],
    [4, 1, 2],
    [-3, 3, 4]
];

const result = luDecomposition(matrix);
console.log("Lower triangular matrix:");
console.log(result.lower);
console.log("\nUpper triangular matrix:");
console.log(result.upper);
