import { Avatar, Button } from "@mui/material";
import { useState } from "react";
import db from "../Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMsg, setTweetMsg] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        displayName: "Chirag",
        username: "@chk",
        verified: true,
        text: tweetMsg,
        image: tweetImage,
        avatar: "https://avatars.githubusercontent.com/u/157453139?v=4",
      });
      setTweetMsg("");
      setTweetImage("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="tweetbox">
      <form onSubmit={sendTweet}>
        <div className="tweetbox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/157453139?v=4" />
          <input
            onChange={(e) => setTweetMsg(e.target.value)}
            value={tweetMsg}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweet_image"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button type="submit" className="tweet_button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
