import { render } from "@testing-library/react";
import AppWithAuthenticator from "./App";

test("renders Sign-Up page", async () => {
  const { getByText } = render(<AppWithAuthenticator />);
  const signUp = getByText(
    (_, element) => element.tagName.toLowerCase() === "amplify-authenticator"
  );
  expect(signUp).toBeTruthy();
});
