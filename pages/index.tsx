import { useState } from "react"
import AboutMenu from "./component/about"
import ContactMenu from "./component/contact"
import Footer from "./component/footer"
import Header from "./component/header"
import HomeMenu from "./component/home"
import Main from "./component/main"
import ProjectMenu from "./component/project"

export default function Home() {
  const [menu, setMenu] = useState(<HomeMenu />)

  const handleMenu = (param:any) => {
    if (param == "home"){
      setMenu(<HomeMenu />)
    }else if (param == "project"){
      setMenu(<ProjectMenu />)
    }else if (param == "about"){
      setMenu(<AboutMenu />)
    }
    else if (param == "contact"){
      setMenu(<ContactMenu />)
    }
  }


  return (
    <div>
      <Header onClick={handleMenu}/>
      <Main/>    
       {
        menu
       }
      <Footer/> 
    </div>
  )
}
