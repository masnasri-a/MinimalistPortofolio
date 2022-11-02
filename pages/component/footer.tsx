import { FaLinkedin } from "react-icons/fa";
import Socmed from "./socmed";
import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="socmed">
                    <Socmed menu="linkedin" />
                </div>
                <div className="footerContent">
                        <span>Made with &hearts; by nasri</span>
                </div>
            </div>
        </>
    )
}

export default Footer;