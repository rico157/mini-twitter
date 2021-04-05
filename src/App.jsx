import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { useEffect, useState } from "react";
import { getTweetsByDate } from "./API/api";
import ListTweets from "./Components/ListTweets";

Amplify.configure(awsconfig);

export function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweetsByDate()
      .then((tweetsData) => setTweets(tweetsData))
      .catch(console.log);
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
      <ListTweets tweets={tweets} />
      <AmplifySignOut />
    </>
  );
}

export default withAuthenticator(App);
