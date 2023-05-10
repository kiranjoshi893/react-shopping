// import {Sum} from "./sum";
const Sum = require('./sum');

// describe("Calculator tests", () => {
test('adding  two numbers', () => {
    expect(Sum(1, 2)).toBe(3);
});
test('adding to strings', () => {
    expect(Sum('1', '4')).toBe(5)
});
// })