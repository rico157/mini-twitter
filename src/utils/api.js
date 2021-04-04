import { API, graphqlOperation } from "aws-amplify";
import { listTweets } from "./queries";

export const getTweets = async () => {
  const { data } = await API.graphql(graphqlOperation(listTweets));
  return data?.listTweets?.items;
};
