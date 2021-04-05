import formatDate from "../utils/formatDate";

const ListTweets = ({ tweets }) => {
  return (
    <ul>
      {tweets?.map((tweet) => {
        const { id, message, createdAt, likes = 0 } = tweet;
        const date = formatDate(createdAt);

        return (
          <li key={id}>
            <p>{message}</p>
            <p>{id}</p>
            <p>{date}</p>
            <p>{likes}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ListTweets;
