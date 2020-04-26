const lib = require("../lib");

test("absolute - should return a +ve number if input is +ve", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

test("absolute - should return a +ve number if input is -ve", () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1);
});

test("absolute - should return 0 if input is 0", () => {
  const result = lib.absolute(0);
  expect(result).toBe(0);
});
