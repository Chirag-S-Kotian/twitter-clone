import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="input">
        <SearchIcon className="search" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget_container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1784935340752716159"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Chirag-S-Kotian"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/Chirag-S-Kotian"}
          options={{ text: "#reactjs is awesome", via: "Chirag-S-Kotian" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
