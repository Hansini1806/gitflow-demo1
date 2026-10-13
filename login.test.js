const login = require("./login");

test("login works", () => {
  expect(login()).toBe(true);
});