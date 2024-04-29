import Feed from "./Components/Feed";
import SideBar from "./Components/SideBar";
import Widgets from "./Components/Widgets";

const App = () => {
  return (
    <div className="app">
      <SideBar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default App;
