const formatDate = (createdAt) => {
  // Format date
  const tweetDate = new Date(createdAt);

  const year = tweetDate.getFullYear();
  let month = tweetDate.getMonth() + 1;
  let dt = tweetDate.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  const parsedDate = `${dt}/${month}/${year}`;

  return parsedDate;
};

export default formatDate;
