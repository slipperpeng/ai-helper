import ChatMessage from "./components/ChatMessage/ChatMessage";
import SideBar from "./components/SideBar/SideBar";
import './HomePage.less'

const HomePage = ()=>{
  return (
    <div className="home-page-comp">
      <SideBar />
      <ChatMessage />
    </div>
  )
}

export default HomePage;