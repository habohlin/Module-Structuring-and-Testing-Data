import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`Edge case: division by zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`Basic proper fraction`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test(`Basic improper fraction`, () => {
  expect(isProperFraction(4, 2)).toEqual(false);
});

test(`Edge case improper fraction`, () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});

test(`Negative proper fraction`, () => {
  expect(isProperFraction(-5, 8)).toEqual(true);
});

test(`Negative improper fraction`, () => {
  expect(isProperFraction(-8, 5)).toEqual(false);
});

test(`Edge case proper fraction`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});