import { useEffect, useState } from "react";
import { FaBeer, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link'

const Socmed = (props: any) => {
    return (
        <>
            <div className="menuFooter">
                <div className="borderSocmed">
                    <FaLinkedinIn size={30} />
                </div>
                <div className="borderSocmed">
                    <FaInstagram size={30} />
                </div>
                
                <div className="borderSocmed">
                    <FaFacebookF size={30} />
                </div>
            </div>
        </>
    )
}

export default Socmed;