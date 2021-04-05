export const createTweet = `
  mutation CreateTweet(
    $input: CreateTweetInput!) {
    createTweet(input: $input) {
      id
      likes
      message
      createdAt
    }
  }
`;
