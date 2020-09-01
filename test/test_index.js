// @format
const test = require("ava");

const isGSM7 = require("../src/index.js");

test("if lib recognizes non GSM7 characters", t => {
  t.assert(isGSM7("🔥") === false);
});

test("if lib passes a regular sms-able text", t => {
  t.assert(
    isGSM7("It was a teenage wedding and the old folks wished them well")
  );
});
