let checkPrime = (n) => {
    if (n < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
    }
    return true;
}

let arr = [1, 3, 5, 2, 14, 17, 32, 37];
let arrPrime = arr.filter(item => checkPrime(item));
console.log(arrPrime);