import formatDate from "./formatDate";

test("returns a string", () => {
  expect(typeof formatDate(new Date())).toBe("string");
});

test("returns the correct formatted date", () => {
  expect(formatDate(new Date())).toMatch(/\d{2}\/\d{2}\/\d{4}$/);
});
