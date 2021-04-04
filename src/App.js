import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return <h1>Hello World!</h1>;
}

export default withAuthenticator(App);
