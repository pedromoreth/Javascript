// Function to return gcd of a and b
function gcd(a, b) {
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

// Function to find gcd of array
// of numbers
function findGCD(arr, n) {
    let result = arr[0];
    for (let i = 1; i < n; i++) {
        result = gcd(arr[i], result);

        if (result == 1) {
            return 1;
        }
    }
    return result;
}

// Driver code
let arr = [2, 4, 6, 8, 16];
let n = arr.length;
document.write(findGCD(arr, n) + "<br>");