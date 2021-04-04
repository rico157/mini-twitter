import { render } from "@testing-library/react";
import AppWithAuthenticator, { App } from "./App";

test("renders Sign-Up page", async () => {
  const { getByText } = render(<AppWithAuthenticator />);
  const signUp = getByText(
    (_, element) => element.tagName.toLowerCase() === "amplify-authenticator"
  );
  expect(signUp).toBeTruthy();
});

test("renders Sign-Out button", async () => {
  const { getByText } = render(<App />);
  const signUp = getByText(
    (_, element) => element.tagName.toLowerCase() === "amplify-sign-out"
  );
  expect(signUp).toBeTruthy();
});
