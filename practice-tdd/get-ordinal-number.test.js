import { getOrdinalNumber } from "./get-ordinal-number.js";
// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

// Case 2: Numbers ending with 11. Should append "th" to the number
test("should append 'th' for numbers ending with 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(4211)).toEqual("4211th");
});

// Case 3: Numbers ending with 2 (but not 12). Should append "nd" to the number
test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(132)).toEqual("132nd");
});

// Case 4: Numbers ending with 12. Should append "th" to the number
test("should append 'th' for numbers ending with 12", () => {
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(4212)).toEqual("4212th");
});

// Case 5: Numbers ending with 3 (but not 13). Should append "rd" to the number
test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(133)).toEqual("133rd");
});

// Case 6: Numbers ending with 13. Should append "th" to the number
test("should append 'th' for numbers ending with 12", () => {
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(113)).toEqual("113th");
  expect(getOrdinalNumber(4213)).toEqual("4213th");
});

// Case 7: All other whole numbers. Should append "th" to the number
test("should append 'th' for all other whole numbers", () => {
  expect(getOrdinalNumber(-1834)).toEqual("-1834th");
  expect(getOrdinalNumber(23151509)).toEqual("23151509th");
  expect(getOrdinalNumber(-100)).toEqual("-100th");
});

// Case 8: Throw error for invalid numbers
test("should throw error for all invalid numbers", () => {
  expect(() => {getOrdinalNumber(5.7)}).toThrow("Error: whole number is needed");
});