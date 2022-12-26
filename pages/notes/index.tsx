import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./components/sidebar";
import Headers from "./components/header";
import MenuNotes from "./components/menuNotes";
import { MdOutlineCreate } from "react-icons/md";
import CreateNote from "./components/CreateNote";
const Index = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [menus, setMenus] = useState("Notes");
  const [Create, setCreate] = useState(false)

  const handleLogin = () => {
    const names = localStorage.getItem("name");
    if (names == null) {
      router.push("/notes/login");
    } else {
      setName(names);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  const handleMenu = (name: string) => {
    setMenus(name);
  };

  const handleSearch = (value: any) => {
    console.log(value);
  };

  const handleSuccess = (value:any) =>{
    console.log(value);
    if (value == "success"){
      setCreate(!Create)
      window.location.reload()
    }
    
  }

  return (
    <>
      <div className="container-fluid">
        {
            Create?(
                <CreateNote save={handleSuccess}/>
            ):null
        }
        <div className="mainNotes">
          <div className="row">
            <div className="col-2">
              <Sidebar menu={handleMenu} />
            </div>
            <div className="col-10">
              <Headers menu={handleSearch} name={name} />
              <MenuNotes menuName={menus} />
            </div>
          </div>
        </div>
        <div className="addNotes" onClick={()=> setCreate(!Create)}>
          <MdOutlineCreate width={30} height={30} />
        </div>
      </div>
    </>
  );
};
export default Index;
