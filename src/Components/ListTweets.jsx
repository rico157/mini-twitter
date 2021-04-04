function ListTweets({ tweets }) {
  return (
    <ul>
      {tweets?.map((tweet) => (
        <li key={tweet.id}>
          <p>{tweet.message}</p>
          <p>{tweet.id}</p>
          <p>{tweet.createdAt}</p>
          <p>{tweet.likes}</p>
        </li>
      ))}
    </ul>
  );
}

export default ListTweets;
