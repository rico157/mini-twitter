import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import { useEffect, useState } from "react";
import awsconfig from "./aws-exports";
import { getTweets } from "./utils/api";

Amplify.configure(awsconfig);

export function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweets().then((tweetsData) => setTweets(tweetsData));
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
      {tweets?.map((tweet) => (
        <div key={tweet.id}>
          <h2>{tweet.message}</h2>
          <h2>{tweet.id}</h2>
          <h2>{tweet.createdAt}</h2>
          <h2>{tweet.likes}</h2>
        </div>
      ))}
      <AmplifySignOut />
    </>
  );
}

export default withAuthenticator(App);
