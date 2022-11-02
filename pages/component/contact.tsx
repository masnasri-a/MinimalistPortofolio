import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaFileDownload, FaTelegram, FaWhatsapp } from "react-icons/fa";

const ContactMenu = () => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    return (
        <>
        <motion.div
                initial="initial"
                animate="animate"
                variants={{
                    initial: {
                        opacity: 0,
                    },
                    animate: {
                        opacity: 1,
                    },
                }}
            >
            <div className="contactMenu">
                <div className="menus">
                    <div className="row">
                        <div className="column col-3">
                            <a href="https://t.me/nanassssa">
                            <div className="btnChat">
                                <FaTelegram size={30}/>
                                <span>Telegram</span>
                            </div>
                            </a>
                            <a href="https://wa.me/+6282228893284">
                            <div className="btnChat">
                                <FaWhatsapp size={30}/>
                                <span>Whatsapp</span>
                            </div>
                            </a>
                            <a href="https://github.com/masnasri-a/images/raw/main/Tabloid%20-%201.pdf">
                            <div className="btnChat">
                                <FaFileDownload size={30}/>
                                <span>Download CV</span>
                            </div>
                            </a>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-7">
                                <div className="inputData">
                                        <span>Your Name</span>
                                        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
                                    </div>
                                    <div className="inputData">
                                        <span>Mail</span>
                                        <input type="text" onChange={(e)=>setMail(e.target.value)} value={mail} />
                                    </div>
                                    <div className="inputData">
                                        <span>Phone</span>
                                        <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} />
                                    </div>
                                    <div className="inputData inputBtn">
                                        <button className="btnSend">Send</button>
                                    </div>
                                </div>
                                <div className="col-5">
                                <div className="inputData">
                                        <span>Message</span>
                                        <textarea className="Memo" onChange={(e)=>setMessage(e.target.value)} value={message} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </>
    )
}

export default ContactMenu;