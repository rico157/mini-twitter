import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { useEffect, useState } from "react";
import { getTweetsByDate, insertTweet } from "./API/api";
import ListTweets from "./Components/ListTweets";

Amplify.configure(awsconfig);

export const App = () => {
  const [tweets, setTweets] = useState([]);
  const [inputTweet, setInputTweet] = useState("");

  useEffect(() => {
    getTweetsByDate()
      .then((tweetsData) => setTweets(tweetsData))
      .catch(console.log);
  }, []);

  const handleChange = (event) => {
    setInputTweet(event.target.value);
  };

  const handleSubmit = () => {
    insertTweet({ message: inputTweet, type: "tweet" })
      .then(({ createTweet }) => setTweets([createTweet, ...tweets]))
      .catch(console.log);
  };
  return (
    <>
      <h1>Hello World!</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          value={inputTweet}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <ListTweets tweets={tweets} />
      <AmplifySignOut />
    </>
  );
};

export default withAuthenticator(App);
