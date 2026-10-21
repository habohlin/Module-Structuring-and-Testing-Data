import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)

test(`Cards with valid number rank`, () => {
  expect(getCardValue("10♣")).toEqual(10);
});

//   Face Cards (J, Q, K)

test(`Cards with valid letter rank`, () => {
  expect(getCardValue("K♠")).toEqual(10);
  expect(getCardValue("A♣")).toEqual(11);
});

//   Invalid Cards

test(`Card with invalid string`, () => {
  expect(() => {
    getCardValue("invalid");
  }).toThrow(/Expected a number followed by a suit, but got "invalid"/);
});

test(`Card with number rank outside range 2-10`, () => {
  expect(() => {
    getCardValue("19♠");
  }).toThrow(/Expected a number followed by a suit, but got "19♠"/);
  expect(() => {
    getCardValue("-3♦");
  }).toThrow(/Expected a number followed by a suit, but got "-3♦"/);
});

test(`Card with letter rank other than the correct options`, () => {
  expect(() => {
    getCardValue("P♦");
  }).toThrow(/Expected a number followed by a suit, but got "P♦"/);
  expect(() => {
    getCardValue("s♦");
  }).toThrow(/Expected a number followed by a suit, but got "s♦"/);
  expect(() => {
    getCardValue("sOup♦");
  }).toThrow(/Expected a number followed by a suit, but got "sOup♦"/);
});

test(`Card with valid number rank lacking suit`, () => {
  expect(() => {
    getCardValue("5");
  }).toThrow(/Expected a number followed by a suit, but got "5"/);
});

test(`Card with valid letter rank lacking suit`, () => {
  expect(() => {
    getCardValue("Q");
  }).toThrow(/Expected a number followed by a suit, but got "Q"/);
});

test(`Card with valid suit lacking rank`, () => {
  expect(() => {
    getCardValue("♠");
  }).toThrow(/Expected a number followed by a suit, but got "♠"/);
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
