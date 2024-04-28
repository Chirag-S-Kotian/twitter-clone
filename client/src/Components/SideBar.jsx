import SidebarOption from './SidebarOption';
import XIcon from '@mui/icons-material/X';
import HouseIcon from '@mui/icons-material/House';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function SideBar() {
  return (
    <div className="sidebar">
      {/*Twitter icon*/}
      <XIcon />
      <SidebarOption Icon={HouseIcon} text="Home"/>
      <SidebarOption Icon={ExploreIcon} text="Explore"/>
      <SidebarOption Icon={NotificationsActiveIcon} text="Notifications"/>
      <SidebarOption Icon={} text=""/>
      <SidebarOption Icon={} text=""/>


      {/*Twitter icon*/}
    </div>
  )
}

export default SideBar
