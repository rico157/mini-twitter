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
      expect(signUp).toBeInTheDocument();
    });
  });

  describe("App without authenticator", () => {
    test("renders Sign-Out button", () => {
      const { getByText } = render(<App />);
      const signOutButton = getByText(
        (_, element) => element.tagName.toLowerCase() === "amplify-sign-out"
      );
      expect(signOutButton).toBeTruthy();
      expect(signOutButton).toBeInTheDocument();
    });

    test("renders title", () => {
      const { getByText } = render(<App />);
      const Title = getByText(/Mini Twitter/);
      expect(Title).toBeInTheDocument();
    });

    test("renders a form", () => {
      const { getByText } = render(<App />);
      const form = getByText(
        (_, element) => element.tagName.toLowerCase() === "form"
      );
      expect(form).toBeInTheDocument();
    });

    test("renders a list", () => {
      const { getByText } = render(<App />);
      const ul = getByText(
        (_, element) => element.tagName.toLowerCase() === "ul"
      );
      expect(ul).toBeInTheDocument();
    });
  });
});
