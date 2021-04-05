import { useState } from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 20px;
  font-family: Helvetica, arial, sans-serif;
  padding: 30px;
  border: 1px solid #aaa;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  width: 77px;
  height: 40px;
  border-radius: 9999px;
  border: none;
  background-color: #1da1f2;
  font-weight: 700;
  color: #fff;
  margin: 10px 10px 0 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

const CreateTweet = ({ tweets, setTweets, insertTweet }) => {
  const [inputTweet, setInputTweet] = useState("");

  const handleChange = (event) => {
    setInputTweet(event.target.value);
  };

  const handleSubmit = () => {
    insertTweet({ message: inputTweet, type: "tweet" })
      .then(({ createTweet }) => setTweets([createTweet, ...tweets]))
      .catch(console.log);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextarea
        placeholder="What's happening?"
        value={inputTweet}
        onChange={handleChange}
      />
      <StyledInput type="submit" value="Tweet" />
    </StyledForm>
  );
};

export default CreateTweet;
