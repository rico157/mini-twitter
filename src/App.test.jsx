import { render } from "@testing-library/react";
import AppWithAuthenticator, { App } from "./App";

describe("App component", () => {
  describe("App with authenticator", () => {
    test("renders Sign-Up page", () => {
      const { getByText } = render(<AppWithAuthenticator />);
      const signUp = getByText(
        (_, element) =>
          element.tagName.toLowerCase() === "amplify-authenticator"
      );
      expect(signUp).toBeTruthy();
    });
  });

  describe("App without authenticator", () => {
    test("renders Sign-Out button", () => {
      const { getByText } = render(<App />);
      const signUp = getByText(
        (_, element) => element.tagName.toLowerCase() === "amplify-sign-out"
      );
      expect(signUp).toBeTruthy();
    });
  });
});
