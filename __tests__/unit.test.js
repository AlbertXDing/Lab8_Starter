// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('phone number', () => {
    expect(functions.isPhoneNumber('(111)-111-1111')).toBe(true);
});

test('phone number', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});

test('phone number', () => {
    expect(functions.isPhoneNumber('11a-113423423423')).toBe(false);
});

test('phone number', () => {
    expect(functions.isPhoneNumber('11111111111')).toBe(false);
});

test('email', () => {
    expect(functions.isEmail('axding@ucsd.edu')).toBe(true);
});

test('email', () => {
    expect(functions.isEmail('axding@gmail.com')).toBe(true);
});

test('email', () => {
    expect(functions.isEmail('axding')).toBe(false);
});

test('email', () => {
    expect(functions.isEmail('11111111111')).toBe(false);
});

test('password', () => {
    expect(functions.isStrongPassword('asdklfjasdkf3')).toBe(true);
});

test('password', () => {
    expect(functions.isStrongPassword('a123')).toBe(true);
});

test('password', () => {
    expect(functions.isStrongPassword('123456789')).toBe(false);
});

test('password', () => {
    expect(functions.isStrongPassword('ab')).toBe(false);
});

test('date', () => {
    expect(functions.isDate('99/99/9999')).toBe(true);
});

test('date', () => {
    expect(functions.isDate('9/9/9999')).toBe(true);
});

test('date', () => {
    expect(functions.isDate('9/9/99999')).toBe(false);
});

test('date', () => {
    expect(functions.isDate('999/9/9999')).toBe(false);
});

test('hex', () => {
    expect(functions.isHexColor('#000')).toBe(true);
});

test('hex', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('hex', () => {
    expect(functions.isHexColor('#0000')).toBe(false);
});

test('hex', () => {
    expect(functions.isHexColor('a')).toBe(false);
});
