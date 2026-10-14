import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return true when 1 and 2 is passed`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test(`should return false when 4 and 2 is passed`, () => {
  expect(isProperFraction(4, 2)).toEqual(false);
});

test(`should return false when edge case 2 and 2 is passed`, () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});

test(`should return true when -5 and 8 is passed`, () => {
  expect(isProperFraction(-5, 8)).toEqual(true);
});