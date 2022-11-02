import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="homeMenu">
              <div className="quotes">
                <span>
                  Any fool can write code that a computer can understand. Good
                  programmers write code that humans can understand.
                </span>
              </div>
              <div className="creator">- Martin Fowler</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="homeMenu">
              <div className="quotes">
                <span>
                First, solve the problem. Then, write the code.
                </span>
              </div>
              <div className="creator">- John Johnson</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="homeMenu">
              <div className="quotes">
                <span>
                Experience is the name everyone gives to their mistakes.
                </span>
              </div>
              <div className="creator">- Oscar Wilde</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="homeMenu">
              <div className="quotes">
                <span>
                In order to be irreplaceable, one must always be different
                                </span>
              </div>
              <div className="creator">- Coco Chanel</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="homeMenu">
              <div className="quotes">
                <span>
                Java is to JavaScript what car is to Carpet.
                </span>
              </div>
              <div className="creator">- Chris Heilmann</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </>
  );
};

export default HomeMenu;
