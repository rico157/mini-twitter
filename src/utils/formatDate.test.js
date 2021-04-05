import formatDate from "./formatDate";

test("returns a string", () => {
  expect(typeof formatDate(new Date())).toBe("string");
});
