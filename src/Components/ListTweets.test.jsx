import { render } from "@testing-library/react";
import ListTweets from "./ListTweets";

test("renders a tweet", () => {
  const listTweets = [
    {
      createdAt: "2021-04-04T19:34:54.663Z",
      id: "5d99e337-bff2-445f-a5fd-6a668c05e951",
      likes: null,
      message: "My first mini-tweet!"
    }
  ];
  const { getByText } = render(<ListTweets tweets={listTweets} />);
  expect(getByText("My first mini-tweet!")).toBeInTheDocument();
});

test("renders multiple tweets", () => {
  const listTweets = [
    {
      createdAt: "2021-04-04T19:34:54.663Z",
      id: "5d99e337-bff2-445f-a5fd-6a668c05e953",
      likes: null,
      message: "My third mini-tweet!"
    },
    {
      createdAt: "2021-04-04T19:34:54.663Z",
      id: "5d99e337-bff2-445f-a5fd-6a668c05e952",
      likes: null,
      message: "My second mini-tweet!"
    },
    {
      createdAt: "2021-04-04T19:34:54.663Z",
      id: "5d99e337-bff2-445f-a5fd-6a668c05e951",
      likes: null,
      message: "My first mini-tweet!"
    }
  ];
  const { getByText } = render(<ListTweets tweets={listTweets} />);
  expect(getByText("My first mini-tweet!")).toBeInTheDocument();
  expect(getByText("My second mini-tweet!")).toBeInTheDocument();
  expect(getByText("My third mini-tweet!")).toBeInTheDocument();
});
