import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("can format time after 12:00", () =>
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm"));

test("can format morning time", () =>
  assert.equal(formatAs12HourClock("08:00"), "08:00 am"));

test("can format noon time", () =>
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm"));

test("can format afternoon time with minutes other than 00", () =>
  assert.equal(formatAs12HourClock("15:45"), "03:45 pm"));

test("can format morning time with minutes other than 00", () =>
  assert.equal(formatAs12HourClock("08:25"), "08:25 am"));

test("can format early noon with minutes other than 00", () =>
  assert.equal(formatAs12HourClock("12:17"), "12:17 pm"));

test("can format time between midnight and 1 am", () =>
  assert.equal(formatAs12HourClock("00:15"), "12:15 am"));

test("can format exactly midnight", () =>
  assert.equal(formatAs12HourClock("00:00"), "12:00 am"));

test("can format last minute before noon", () =>
  assert.equal(formatAs12HourClock("11:59"), "11:59 am"));