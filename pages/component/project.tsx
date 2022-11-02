import Image from "next/image";
import Images from '../../public/images.jpg'
import { motion } from "framer-motion";

const ProjectMenu = () => {
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
                <div className="homeMenu">
                    <div className="row">
                        <div className="col-6">
                            <Image className="ImageProject" src={Images} alt="Image" width={300} height={300} />
                        </div>
                        <div className="col-6">
                            <div className="titleProject">
                                Internal Data Processing
                            </div>
                            <div className="descProject">
                                Creating a platform for Quality Assurance and Media Analyst  to simply request resprocess data, and automation reprocess data by request with log for tracebility data changed
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProjectMenu;