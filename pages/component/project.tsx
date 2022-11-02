import Image from "next/image";
import Images from "../../public/images.jpg";
import CN from "../../public/cloudNot.jpg";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";
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
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="homeMenu">
              <div className="row">
                <div className="col-6">
                  <Image
                    className="ImageProject"
                    src={Images}
                    alt="Image"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="col-6">
                  <div className="titleProject">Internal Data Processing</div>
                  <div className="descProject">
                    Creating a platform for Quality Assurance and Media Analyst
                    to simply request resprocess data, and automation reprocess
                    data by request with log for tracebility data changed
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="homeMenu">
              <div className="row">
                <div className="col-6">
                  <Image
                    className="ImageProject"
                    src={CN}
                    alt="Image"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="col-6">
                  <div className="titleProject">Cloud Note</div>
                  <div className="descProject">
                    Creating a platform for Server assets management for internal developers at my current company
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </>
  );
};

export default ProjectMenu;
