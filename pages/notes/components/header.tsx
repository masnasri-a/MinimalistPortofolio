import Image from "next/image";
import { useState } from "react";
import Logo from '../../../public/zeta.png'

const Headers = (props: any) => {
  const [search, setSearch] = useState("");
  const handleSearch = (values: any) => {
    setSearch(values);
    props.menu(values);
  };
  return (
    <>
      <div className="headerNote d-flex">
        <input
          type="text"
          className="searchHeader"
          value={search}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <div className="usernames">
            <Image src={Logo} width={50} height={50} alt="Logo" />
            <span>{props.name}</span>
            </div>
      </div>
    </>
  );
};
export default Headers;
