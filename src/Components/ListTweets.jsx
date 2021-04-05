import styled from "styled-components";
import formatDate from "../utils/formatDate";

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const StyledTweet = styled.ul`
  border: 1px solid #aaa;
  padding: 30px;
  p {
    margin-bottom: 10px;
    margin-top: 0px;
  }
  i {
    color: #777;
  }
`;

const ListTweets = ({ tweets }) => {
  return (
    <StyledList>
      {tweets?.map((tweet) => {
        const { id, message, createdAt } = tweet;
        const date = formatDate(createdAt);

        return (
          <StyledTweet key={id}>
            <p>{message}</p>
            <i>{date}</i>
          </StyledTweet>
        );
      })}
    </StyledList>
  );
};

export default ListTweets;
