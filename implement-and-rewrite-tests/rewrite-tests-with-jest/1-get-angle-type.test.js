import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles

test(`Classifies acute angles`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle

test(`Classifies right angles`, () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 3: Obtuse angles

test(`Classifies obtuse angles`, () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(135)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

// Case 4: Straight angle

test(`Classifies straight angles`, () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Reflex angles

test(`Classifies reflex angles`, () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

// Case 6: Invalid angles

test(`Classifies invalid angles`, () => {
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(-1)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
  expect(getAngleType(361)).toEqual("Invalid angle");
});
