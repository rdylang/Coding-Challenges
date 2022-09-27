/* Examples
generate(3, ["j", "h"]) ➞ "j, h, hj"
generate(5, ["e", "a"]) ➞ "e, a, ae, aea, aeaae"
generate(6, ["n", "k"]) ➞ "n, k, kn, knk, knkkn, knkknknk"
generate(1, ["f", "g"]) ➞ "invalid" */

const fibonacci = require('./2022-09-26');

test('n is less than 2', () => {
    expect(fibonacci(1, ['f', 'g'])).toBe('invalid');
});

test('n is 2', () => {
    expect(fibonacci(2, ['a', 'b'])).toBe('a, b');
});

test('n is 3', () => {
    expect(fibonacci(3, ['j', 'h'])).toBe('j, h, hj');
})

test('n is 5', () => {
    expect(fibonacci(5, ['e', 'a'])).toBe('e, a, ae, aea, aeaae');
});

test('n is 6', () => {
    expect(fibonacci(6, ['n', 'k'])).toBe('n, k, kn, knk, knkkn, knkknknk');
})