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

test("returns the correct formatted date in less than an hour", () => {
  expect(formatDate(new Date() - 90000)).toEqual("one minute ago");
  expect(formatDate(new Date() - 3000000)).toEqual("50 minutes ago");
  expect(formatDate(new Date() - 5000000)).toEqual("1 hour ago");
});

test("returns the correct formatted date in less than an day", () => {
  expect(formatDate(new Date() - 10000000)).toEqual("3 hours ago");
  expect(formatDate(new Date() - 100000000)).toEqual("1 day ago");
});

test("returns the correct formatted date in less than a week", () => {
  expect(formatDate(new Date() - 300000000)).toEqual("3 days ago");
  expect(formatDate(new Date() - 700000000)).toEqual("1 week ago");
});
