import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';

function TweetBox() {
  return (
    <div className="tweetbox">
      <form action="">
        <div className="tweetbox__input">
            <Avatar src="https://avatars.githubusercontent.com/u/157453139?v=4"/>
            <input placeholder="What's happening?" type="text" />
        </div>
        <input className='tweet_image' placeholder='Optional:Enter image URL' type="text" />
        <Button className='tweet_button'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
