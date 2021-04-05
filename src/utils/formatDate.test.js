import formatDate from "./formatDate";

test("returns a string", () => {
  expect(typeof formatDate(new Date())).toBe("string");
});

test("returns the correct formatted date", () => {
  expect(formatDate(new Date())).toEqual("just now");
});

test("returns the correct formatted date in less than a minute", () => {
  expect(formatDate(new Date() - 10000)).toEqual("10 seconds ago");
  expect(formatDate(new Date() - 30000)).toEqual("half a minute ago");
  expect(formatDate(new Date() - 50000)).toEqual("less than a minute ago");
});
