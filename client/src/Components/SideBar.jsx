import SidebarOption from './SidebarOption';
import XIcon from '@mui/icons-material/X';
import HouseIcon from '@mui/icons-material/House';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MoreIcon from '@mui/icons-material/More';
import Button from '@mui/material/Button';

function SideBar() {
  return (
    <div className="sidebar">
      <XIcon className='sidebar__twitterIcon'/>

      {/*sidebar option*/}
      <SidebarOption active Icon={HouseIcon} text="Home"/>
      <SidebarOption Icon={ExploreIcon} text="Explore"/>
      <SidebarOption Icon={NotificationsActiveIcon} text="Notifications"/>
      <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
      <SidebarOption Icon={BookmarksIcon} text="Bookmarks"/>
      <SidebarOption Icon={ListAltIcon} text="Lists"/>
      <SidebarOption Icon={PermContactCalendarIcon} text="Profile"/>
      <SidebarOption Icon={MoreIcon} text="More"/>

      {/*tweet button*/}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  )
}

export default SideBar
