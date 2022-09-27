const isPinValid = require('./2022-09-19');

test('6-digit pin', () => {
    expect(isPinValid('121317')).toBe(true);
});

test('4-digit pin', () => {
    expect(isPinValid('1234')).toBe(true);
});

test('5-digit pin', () => {
    expect(isPinValid('45135')).toBe(false);
});

test('alphanumeric pin', () => {
    expect(isPinValid('89abc1')).toBe(false);
});

test('6-digit pin', () => {
    expect(isPinValid('900876')).toBe(true);
});

test('pin with space', () => {
    expect(isPinValid(' 4983')).toBe(false);
});