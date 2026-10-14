import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("Basic improper fraction", () => {
  assert.equal(isProperFraction(4, 2), false);
});

test("Edge case improper fraction", () => {
  assert.equal(isProperFraction(2, 2), false);
});

test("Negative proper fraction", () => {
  assert.equal(isProperFraction(-5, 8), true);
});

test("Negative improper fraction", () => {
  assert.equal(isProperFraction(-8, 5), false);
});
