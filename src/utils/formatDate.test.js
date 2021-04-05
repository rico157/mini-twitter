import formatDate from "./formatDate";

test("returns a string", () => {
  expect(typeof formatDate(new Date())).toBe("string");
});

test("returns the correct formatted date", () => {
  expect(formatDate(new Date())).toEqual("just now");
});
