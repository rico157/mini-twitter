import { API, graphqlOperation } from "aws-amplify";
import { createTweet } from "./mutations";
import { listTweets, listTweetsByDate } from "./queries";

export const getTweets = async () => {
  const { data } = await API.graphql(graphqlOperation(listTweets));
  return data?.listTweets?.items;
};

export const getTweetsByDate = async () => {
  const { data } = await API.graphql(
    graphqlOperation(listTweetsByDate, {
      type: "tweet",
      sortDirection: "DESC"
    })
  );
  return data?.tweetsByDate?.items;
};

export const insertTweet = async (message) => {
  const { data } = await API.graphql(
    graphqlOperation(createTweet, { input: message })
  );
  console.log(data);
  return data?.items;
};
