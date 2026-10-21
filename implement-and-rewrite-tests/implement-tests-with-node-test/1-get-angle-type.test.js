import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies acute angles", () => {
  const acute1 = getAngleType(1);
  assert.equal(acute1, "Acute angle");
  const acute89 = getAngleType(89);
  assert.equal(acute89, "Acute angle");
});

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("Classifies obtuse angles", () => {
  const obtuse91 = getAngleType(91);
  assert.equal(obtuse91, "Obtuse angle");
  const obtuse179 = getAngleType(179);
  assert.equal(obtuse179, "Obtuse angle");
});

test("Classifies straight angles", () => {
  const straight = getAngleType(180);
  assert.equal(straight, "Straight angle");
});

test("Classifies reflex angles", () => {
  const reflex181 = getAngleType(181);
  assert.equal(reflex181, "Reflex angle");
  const reflex359 = getAngleType(359);
  assert.equal(reflex359, "Reflex angle");
});

test("Classifies invalid angles", () => {
  const invalid360 = getAngleType(360);
  assert.equal(invalid360, "Invalid angle");
  const invalid0 = getAngleType(0);
  assert.equal(invalid0, "Invalid angle");
});
