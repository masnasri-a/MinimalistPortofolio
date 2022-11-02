import { motion } from "framer-motion";

const Main = () => {
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
                <div className="byNasri">
                    <span>by</span>
                    <div className="nasri">NASRI</div>

                </div>
                <div className="creative">
                    <span>Your Creative Space</span>
                </div>
            </motion.div>
        </>
    )
}

export default Main;