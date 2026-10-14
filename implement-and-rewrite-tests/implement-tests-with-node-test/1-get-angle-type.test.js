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
  const invalid = getAngleType(0);
  assert.equal(invalid, "Invalid angle");
});

test("Classifies acute angle 1 degrees", () => {
  const acute = getAngleType(1);
  assert.equal(acute, "Acute angle");
});

test("Classifies acute angle 89 degrees", () => {
  const acute = getAngleType(89);
  assert.equal(acute, "Acute angle");
});

test("Classifies obtuse angle 91 degrees", () => {
  const obtuse = getAngleType(91);
  assert.equal(obtuse, "Obtuse angle");
});

test("Classifies obtuse angle 179 degrees", () => {
  const obtuse = getAngleType(179);
  assert.equal(obtuse, "Obtuse angle");
});

test("Classifies straight angle 180 degrees", () => {
  const straight = getAngleType(180);
  assert.equal(straight, "Straight angle");
});

test("Classifies reflex angle 181 degrees", () => {
  const reflex = getAngleType(181);
  assert.equal(reflex, "Reflex angle");
});

test("Classifies reflex angle 359 degrees", () => {
  const reflex = getAngleType(359);
  assert.equal(reflex, "Reflex angle");
});

test("Classifies invalid angle 360 degrees", () => {
  const invalid = getAngleType(360);
  assert.equal(invalid, "Invalid angle");
});
