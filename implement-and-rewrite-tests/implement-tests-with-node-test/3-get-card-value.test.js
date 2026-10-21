import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});

// TODO: What other invalid card cases can you think of?

test("Card with number rank outside range 2-10", () => {
  assert.throws(
    () => getCardValue("19♠"),
    /Expected a number followed by a suit, but got "19♠"/,
    "Expected clear error"
  );
  assert.throws(
    () => getCardValue("-3♦"),
    /Expected a number followed by a suit, but got "-3♦"/,
    "Expected clear error"
  );
});

test("Card with letter rank other than the correct options", () => {
  assert.throws(
    () => getCardValue("P♦"),
    /Expected a number followed by a suit, but got "P♦"/,
    "Expected clear error"
  );
  assert.throws(
    () => getCardValue("s♦"),
    /Expected a number followed by a suit, but got "s♦"/,
    "Expected clear error"
  );
  assert.throws(
    () => getCardValue("soUp♣"),
    /Expected a number followed by a suit, but got "soUp♣"/,
    "Expected clear error"
  );
});

test("Card with valid number rank lacking suit", () => {
  assert.throws(
    () => getCardValue("5"),
    /Expected a number followed by a suit, but got "5"/,
    "Expected clear error"
  );
});

test("Card with valid letter rank lacking suit", () => {
  assert.throws(
    () => getCardValue("Q"),
    /Expected a number followed by a suit, but got "Q"/,
    "Expected clear error"
  );
});

test("Card with valid suit lacking rank", () => {
  assert.throws(
    () => getCardValue("♠"),
    /Expected a number followed by a suit, but got "♠"/,
    "Expected clear error"
  );
});

//Valid cases

test("Valid cards", () => {
  assert.equal(getCardValue("A♣"), 11);
  assert.equal(getCardValue("10♣"), 10);
  assert.equal(getCardValue("K♠"), 10);
});
