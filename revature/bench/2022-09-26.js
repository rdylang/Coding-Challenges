/* Recursion: Fibonacci String

A Fibonacci string is a precedence of the Fibonacci series.
It works with any two characters of the English alphabet
(as opposed to the numbers 0 and 1 in the Fibonacci series)
as its initial items and concatenates them together as it progresses
similarly to that of the Fibonacci series.

// return "invalid" if n is less than 2 */

function fibonacci(n, chars) {
    if (n < 2) {
        return 'invalid';
    }
    else if (n === 2) {
        return chars.join(', ');
    }
    else {
        chars.push(chars.at(-1) + chars.at(-2));
        return fibonacci(n-1, chars);
    }
}

module.exports = fibonacci;