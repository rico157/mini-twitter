const formatDate = (createdAt) => {
  // Format the date in a "Twitter style"
  const tweetDate = new Date(createdAt);
  const userDate = new Date();

  // Set the difference between the tweet date and the actual user date
  const diff = Math.floor((userDate - tweetDate) / 1000);

  // Compare the difference and return the appropriate string
  if (diff <= 1) return "just now";
  else if (diff < 20) return diff + " seconds ago";
  else if (diff < 40) return "half a minute ago";
  else if (diff < 60) return "less than a minute ago";
  else if (diff <= 90) return "one minute ago";
  // If more than a minute ago divide by seconds present in a minute
  else if (diff <= 3540) return Math.round(diff / 60) + " minutes ago";
  else if (diff <= 5400) return "1 hour ago";
  // If more than a minute ago divide by seconds present in an hour
  else if (diff <= 86400) return Math.round(diff / 3600) + " hours ago";
  else if (diff <= 129600) return "1 day ago";
  // If more than a minute ago divide by seconds present in a day
  else if (diff < 604800) return Math.round(diff / 86400) + " days ago";
  else if (diff <= 777600) return "1 week ago";

  // If none of the above are true return the date
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

  return "on " + parsedDate;
};

export default formatDate;
