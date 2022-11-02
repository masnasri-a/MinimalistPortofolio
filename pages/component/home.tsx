import { motion } from "framer-motion";

const HomeMenu = () => {
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
                    <div className="quotes">
                        <span>
                            Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
                        </span>
                    </div>
                    <div className="creator">
                        - Martin Fowler
                    </div>
                </div>
            </motion.div>

        </>
    )
}

export default HomeMenu;