import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Provides = () => {
  return (
    <>
      <div className="mb-20 mt-16 px-4 md:px-4 lg:px-0" >
        <h1 className="font-bold text-2xl logofont mb-6">WE PROVIDE</h1>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
          <div
              className="h-96 rounded-xl"
              style={{
                backgroundImage: `url(https://i.ibb.co/Q9cv94C/rsz-cover-jennyquicksall-01.jpg)`,
              }}
            >
              <div className="hero-overlay bg-opacity-70 rounded-xl">
                <div className="pt-[240px] px-4 text-white text-center pb-4">
                  <h1 className="font-bold text-2xl mb-1">VENUE</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
              className="h-96 rounded-xl"
              style={{
                backgroundImage: `url(https://i.ibb.co/rbbjqNp/rsz-7b95c051b95abaf0e40b95c5457fabb9.jpg)`,
              }}
            >
              <div className="hero-overlay bg-opacity-70 rounded-xl">
                <div className="pt-[240px] px-4 text-white text-center pb-4">
                  <h1 className="font-bold text-xl mb-1">DECORATIONS</h1>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div
              className="h-96 rounded-xl"
              style={{
                backgroundImage: `url(https://i.ibb.co/7KR6Gj9/rsz-pngtree-cheese-meat-food-party-catering-vector-picture-image-2268493.jpg)`,
              }}
            >
              <div className="hero-overlay bg-opacity-70 rounded-xl">
                <div className="pt-[240px] px-4 text-white text-center pb-4">
                  <h1 className="font-bold text-xl mb-1">CATERING</h1>
                  
                </div>
              </div>
            </div>
            </SwiperSlide>
          <SwiperSlide>
          <div
              className="h-96 rounded-xl"
              style={{
                backgroundImage: `url(https://i.ibb.co/0trLJ0T/rsz-camera-kit-guide-events-portraits-landscape.jpg)`,
              }}
            >
              <div className="hero-overlay bg-opacity-70 rounded-xl">
                <div className="pt-[240px] px-4 text-white text-center pb-4">
                  <h1 className="font-bold text-xl mb-1">PHOTOGRAPHER</h1>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
              className="h-96 rounded-xl"
              style={{
                backgroundImage: `url(https://i.ibb.co/L0yCVnr/rsz-02e3e01805a4f1443d09e54403cdec0e.jpg)`,
              }}
            >
              <div className="hero-overlay bg-opacity-70 rounded-xl">
                <div className="pt-[240px] px-4 text-white text-center pb-4">
                  <h1 className="font-bold text-xl mb-1">CULTURAL EVENTS</h1>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
              className="h-96 rounded-xl"
              style={{
                backgroundImage: `url(https://i.ibb.co/jv6npCQ/rsz-stock-photo-the-audio-jacks-are-connected-to-the-sound-mixer-wires-and-cables-at-music-studio-21.jpg)`,
              }}
            >
              <div className="hero-overlay bg-opacity-70 rounded-xl">
                <div className="pt-[240px] px-4 text-white text-center pb-4">
                  <h1 className="font-bold text-xl mb-1">TECHNICAL SUPPORT</h1>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Provides;
