import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import { useState } from "react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

export function App() {
  const [tweets, setTweets] = useState([]);

  return (
    <>
      <h1>Hello World!</h1>
      <AmplifySignOut />
    </>
  );
}

export default withAuthenticator(App);
