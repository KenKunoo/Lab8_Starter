// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Phone numbers
test('check if 762-563-3332 is true', () => {
    expect(functions.isPhoneNumber('762-563-3332')).toBe(true);
}),

test('check if 626-744-5677 is true', () => {
    expect(functions.isPhoneNumber('626-744-5677')).toBe(true);
}),

test('check if 561-589-553 is false', () => {
    expect(functions.isPhoneNumber('561-589-553')).toBe(false);
}),

test('check if abc-def-ghi is false', () => {
    expect(functions.isPhoneNumber('abc-def-ghi')).toBe(false);
}),
// Emails
test('check if kefong@ucsd.edu is true', () => {
    expect(functions.isEmail('kefong@ucsd.edu')).toBe(true);
}),

test('check if ae@ucsd.edu is true', () => {
    expect(functions.isEmail('ae@ucsd.edu')).toBe(true);
}),

test('check if kefongucsd.edu is false', () => {
    expect(functions.isEmail('kefongucsd.edu')).toBe(false);
}),

test('check if kefongucsd@edu is false', () => {
    expect(functions.isEmail('kefongucsd@edu')).toBe(false);
}),
// Passwords
test('check if true that a_____bds is a strong password', () => {
    expect(functions.isStrongPassword('a_____bds')).toBe(true);
}),

test('check if true that ds324ewqew3hgf is a strong password', () => {
    expect(functions.isStrongPassword('ds324ewqew3hgf')).toBe(true);
}),

test('check if false that ! is a strong password', () => {
    expect(functions.isStrongPassword('!')).toBe(false);
}),

test('check if false that aaaa##dsdsds!!#!#!# is a strong password', () => {
    expect(functions.isStrongPassword('aaaa##dsdsds!!#!#!#')).toBe(false);
}),
// Date
test('check if true that 3/15/2002 is a date', () => {
    expect(functions.isDate('3/15/2002')).toBe(true);
}),

test('check if true that 12/12/2012 is a date', () => {
    expect(functions.isDate('12/12/2012')).toBe(true);
}),

test('check if false that 11/11 is a date', () => {
    expect(functions.isDate('11/11')).toBe(false);
}),

test('check if false that 33/333/333 is a date', () => {
    expect(functions.isDate('33/333/333')).toBe(false);
}),
// Hexcolor
test('check if true that #AAA is a hex color', () => {
    expect(functions.isHexColor('#AAA')).toBe(true);
}),

test('check if true that #AAAAAA is a hex color', () => {
    expect(functions.isHexColor('#AAAAAA')).toBe(true);
}),

test('check if false that #AF is a hex color', () => {
    expect(functions.isHexColor('#AF')).toBe(false);
}),

test('check if false that #AFDA is a hex color', () => {
    expect(functions.isHexColor('#AFDA')).toBe(false);
})