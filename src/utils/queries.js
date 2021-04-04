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
