import Image from "next/image";
import { BsCalendar2Event } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { BiTrashAlt } from "react-icons/bi";
import { IoArchiveOutline } from "react-icons/io5";

import Logo from "../../../public/zeta.png";
import { useState } from "react";
const Sidebar = (props: any) => {
  const [active, setActive] = useState(0);
  const menu = [
    {
      title: "Notes",
      image: <CgNotes width={20} height={20} />,
    },
    {
      title: "Reminder",
      image: <BsCalendar2Event width={20} height={20} />,
    },
    {
      title: "Archive",
      image: <IoArchiveOutline width={40} height={30} />,
    },
    {
      title: "Trash",
      image: <BiTrashAlt width={20} height={20} />,
    },
  ];
  return (
    <>
      <div className="sidebar flex-column">
        <Image
          className="Logo"
          src={Logo}
          width={100}
          height={100}
          alt="Logo"
        />
        {menu.map((detail: any, index) => {
          let classNames = "menuSidebar";
          if (index == active) {
            return (
              <>
                <div
                  className="menuSidebar menuActive"
                  onClick={() => {
                    setActive(index);
                    props.menu(detail.title);
                  }}
                >
                  {detail.image}
                  <span>{detail.title}</span>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div
                  className={classNames}
                  onClick={() => {
                    setActive(index);
                    props.menu(detail.title);
                  }}
                >
                  {detail.image}
                  <span>{detail.title}</span>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};
export default Sidebar;
