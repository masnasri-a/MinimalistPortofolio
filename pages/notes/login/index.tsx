import Image from "next/image";
import { useState } from "react";
import Logo from "../../../public/zeta.png";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter()
  const username = "masnasri";
  const password = "UtyCantik12";
  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");
  const [userError, setUserError] = useState(false);
  const [pwError, setPwError] = useState(false);

  const handleLogin = () => {
    setUserError(false)
    setPwError(false)
    if (username != user) {
      setUserError(true);
    } else if (password != pw) {
      setPwError(true);
    }else{
        localStorage.setItem('name',username)
        router.push('/notes')
    }
    
  };

  return (
    <>
      <div className="container-fluid">
        <div className="loginPage flex-column">
          <Image src={Logo} width={200} height={200} alt="Logo" />
          <input
            type="text"
            className="InputLogin"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          {userError ? <span>Your username is wrong!</span> : null}
          <input
            type="password"
            className="InputLogin"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          {pwError ? <span>Your password is wrong!</span> : null}
          <button className="buttonLogin" onClick={()=> handleLogin()}>Sign In</button>
        </div>
      </div>
    </>
  );
};
export default Index;
