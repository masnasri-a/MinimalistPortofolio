import { useEffect, useState } from "react";
import {
  FaBeer,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Socmed = (props: any) => {
  return (
    <>
      <div className="menuFooter">
        <a href="https://www.linkedin.com/in/nasri-adzlani-477620165/">
          <div className="borderSocmed">
            <FaLinkedinIn size={30} />
          </div>
        </a>
        <a href="https://www.instagram.com/nasriadzlani/">
        <div className="borderSocmed">
          <FaInstagram size={30} />
        </div>
        </a>
        <a href="https://www.facebook.com/Nasricakarevo/">
          <div className="borderSocmed">
            <FaFacebookF size={30} />
          </div>
        </a>
      </div>
    </>
  );
};

export default Socmed;
