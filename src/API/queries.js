export const listTweets = `
  query ListTweets {
    listTweets {
      items {
        id
        likes
        message
        createdAt
      }
    }
  }
`;

export const listTweetsByDate = `
query TweetsByDate(
  $type: String
  $sortDirection: ModelSortDirection
  $nextToken: String
) {
  tweetsByDate(
    type: $type
    sortDirection: $sortDirection
    nextToken: $nextToken
  ) {
    items {
      id
      likes
      message
      createdAt
      type
    }
    nextToken
  }
}
`;
