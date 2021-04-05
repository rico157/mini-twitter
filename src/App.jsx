import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { useEffect, useState } from "react";
import { getTweetsByDate, insertTweet } from "./API/api";
import ListTweets from "./Components/ListTweets";
import CreateTweet from "./Components/CreateTweet";

Amplify.configure(awsconfig);

export const App = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweetsByDate()
      .then((tweetsData) => setTweets(tweetsData))
      .catch(console.log);
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
      <CreateTweet
        tweets={tweets}
        setTweets={setTweets}
        insertTweet={insertTweet}
      />
      <ListTweets tweets={tweets} />
      <AmplifySignOut />
    </>
  );
};

export default withAuthenticator(App);
