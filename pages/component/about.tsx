import Image from "next/image";
import Images from '../../public/nasri.jpg'
import { motion } from "framer-motion";

const AboutMenu = () => {
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

                <div className="aboutMenu">
                    <div className="detailAbout">
                        <Image src={Images} alt="nasri" width={300} />
                    </div>
                    <div className="hello">
                        <div className="greet">
                            Hello There!
                        </div>
                        <div className="introduce">
                            My name is Nasri, I’am a 24 year old from Demak, Central Java, Indonesia. I started my professional working as Backend and Blockchain Developers at Indonesian Companies
                        </div>
                        <div className="descIntro">
                            I studying informatics in Yogyakarta Technology of University, Indonesia. I love doing programming and graphic designs, and edit stuffs. I made this page to share my work with you guys. Thank you for visiting!
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default AboutMenu;