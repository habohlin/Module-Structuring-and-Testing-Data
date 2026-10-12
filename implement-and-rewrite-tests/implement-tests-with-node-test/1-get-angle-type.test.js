import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("Classifies invalid angle 0 degrees", () => {
  const right = getAngleType(0);
  assert.equal(right, "Invalid angle");
});

test("Classifies acute angle 1 degrees", () => {
  const right = getAngleType(1);
  assert.equal(right, "Acute angle");
});

test("Classifies acute angle 89 degrees", () => {
  const right = getAngleType(89);
  assert.equal(right, "Acute angle");
});

test("Classifies obtuse angle 91 degrees", () => {
  const right = getAngleType(91);
  assert.equal(right, "Obtuse angle");
});

test("Classifies obtuse angle 179 degrees", () => {
  const right = getAngleType(179);
  assert.equal(right, "Obtuse angle");
});

test("Classifies straight angle 180 degrees", () => {
  const right = getAngleType(180);
  assert.equal(right, "Straight angle");
});

test("Classifies reflex angle 181 degrees", () => {
  const right = getAngleType(181);
  assert.equal(right, "Reflex angle");
});