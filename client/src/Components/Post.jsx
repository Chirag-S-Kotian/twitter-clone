import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';

function Post({ displayName,username,verified,text,image,avatar}) {
  return (
    <div className="post">
      <div className="avatar">
        <Avatar src="https://avatars.githubusercontent.com/u/157453139?v=4" />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              Chirag-S-Kotian <span><VerifiedIcon className="post_badge" /> </span>
            </h3>
            <p>{username}</p>
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img className="post_image" src={image} alt="" />
      </div>
    </div>
  );
}

export default Post
