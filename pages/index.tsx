import { useState } from "react";
import AboutMenu from "./component/about";
import ContactMenu from "./component/contact";
import Footer from "./component/footer";
import Header from "./component/header";
import HomeMenu from "./component/home";
import Main from "./component/main";
import ProjectMenu from "./component/project";
import { BsFillChatFill } from "react-icons/bs";
import Chat from "./component/chat";

export default function Home() {
  const [menu, setMenu] = useState(<HomeMenu />);
  const [chat, setChat] = useState(false);

  const handleMenu = (param: any) => {
    if (param == "home") {
      setMenu(<HomeMenu />);
    } else if (param == "project") {
      setMenu(<ProjectMenu />);
    } else if (param == "about") {
      setMenu(<AboutMenu />);
    } else if (param == "contact") {
      setMenu(<ContactMenu />);
    }
  };

  const handleChat = () => {
    setChat(!chat);
    console.log(chat);
  };

  return (
    <>
      <Header onClick={handleMenu} />
      <Main />
      {menu}
      {chat ? <Chat /> : null}
      <div className="chat" onClick={() => handleChat()}>
        <BsFillChatFill size={30} />
      </div>
      <Footer />
    </>
  );
}
