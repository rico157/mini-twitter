import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What's happening?"
        value={inputTweet}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreateTweet;
