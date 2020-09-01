// @format
const test = require("ava");

const isgsm7 = require("../src/index.js");

test("if lib recognizes non GSM7 characters", t => {
  t.assert(isgsm7("🔥") === false);
});

test("if lib passes a regular sms-able text", t => {
  t.assert(
    isgsm7("It was a teenage wedding and the old folks wished them well")
  );
});
