import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)

test(`Should return 10 when given '10♣' `, () => {
  expect(getCardValue("10♣")).toEqual(10);
});

//   Face Cards (J, Q, K)

test(`Should return 10 when given 'K♠' `, () => {
  expect(getCardValue("K♠")).toEqual(10);
});

test(`Should return 11 when given 'A♣'`, () => {
  expect(getCardValue("A♣")).toEqual(11);
});

//   Invalid Cards

test(`Should throw error when given 'invalid'`, () => {
  expect(() => {
    getCardValue("invalid");
  }).toThrow(/Expected a number followed by a suit, but got "invalid"/);
});

test(`Should throw error when given '19♠'`, () => {
  expect(() => {
    getCardValue("19♠");
  }).toThrow(/Expected a number followed by a suit, but got "19♠"/);
});

test(`Should throw error when given 'P♦'`, () => {
  expect(() => {
    getCardValue("P♦");
  }).toThrow(/Expected a number followed by a suit, but got "P♦"/);
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

