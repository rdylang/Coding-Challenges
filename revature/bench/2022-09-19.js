/* Create a function that will test if a string is a valid PIN or not via a regular expression.

A valid PIN has:
- Exactly 4 or 6 characters.
- Only numeric characters (0-9).
- No whitespace.

Notes
Empty strings should return false when tested. */

function isPinValid(pin) {
    let validRe = /^(\d{4}|\d{6})$/;
    if (pin.match(validRe)) {
        return true;
    }
    return false;
}

module.exports = isPinValid;
