import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(() => getCardValue("invalid"), /Expected a number followed by a suit, but got "invalid"/, "Expected clear error");
});

// TODO: What other invalid card cases can you think of?

test("Arbitrary non-card string '19♠'", () => {
  assert.throws(
    () => getCardValue("19♠"),
    /Expected a number followed by a suit, but got "19♠"/,
    "Expected clear error"
  );
});

test("Arbitrary non-card string 'P♦'", () => {
  assert.throws(
    () => getCardValue("P♦"),
    /Expected a number followed by a suit, but got "P♦"/,
    "Expected clear error"
  );
});

test("Arbitrary non-card string 's♦'", () => {
  assert.throws(
    () => getCardValue("s♦"),
    /Expected a number followed by a suit, but got "s♦"/,
    "Expected clear error"
  );
});

test("Arbitrary non-card string 'sOup♦'", () => {
  assert.throws(
    () => getCardValue("soUp♦"),
    /Expected a number followed by a suit, but got "soUp♦"/,
    "Expected clear error"
  );
});

test("Arbitrary non-card string '-3♦'", () => {
  assert.throws(
    () => getCardValue("-3♦"),
    /Expected a number followed by a suit, but got "-3♦"/,
    "Expected clear error"
  );
});

test("Arbitrary non-card string '5'", () => {
  assert.throws(
    () => getCardValue("5"),
    /Expected a number followed by a suit, but got "5"/,
    "Expected clear error"
  );
});

test("Arbitrary non-card string 'Q'", () => {
  assert.throws(
    () => getCardValue("Q"),
    /Expected a number followed by a suit, but got "Q"/,
    "Expected clear error"
  );
});

//Valid cases

test("Valid card 'A♣'", () => {
  assert.equal(getCardValue("A♣"), 11);
});