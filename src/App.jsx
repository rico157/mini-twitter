import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { useEffect, useState } from "react";
import { getTweetsByDate, insertTweet } from "./API/api";
import ListTweets from "./Components/ListTweets";
import CreateTweet from "./Components/CreateTweet";
import GlobalStyle from "./styles/globalStyle";
import styled from "styled-components";

Amplify.configure(awsconfig);

const StyledTitle = styled.h1`
  color: #1da1f2;
`;

const StyledSignOut = styled(AmplifySignOut)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export const App = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweetsByDate()
      .then((tweetsData) => setTweets(tweetsData))
      .catch(console.log);
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledTitle>Mini Twitter</StyledTitle>
      <CreateTweet
        tweets={tweets}
        setTweets={setTweets}
        insertTweet={insertTweet}
      />
      <ListTweets tweets={tweets} />
      <StyledSignOut />
    </>
  );
};

export default withAuthenticator(App);
