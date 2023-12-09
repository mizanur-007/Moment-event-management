
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Rating } from '@mui/material';

const Reviews = ({reviews}) => {
    return (
        <>
      <div className='mt-4 md:mt-10 lg:mt-16 px-2 md:px-4 lg:px-0 mb-4 lg:mb-24' >
        <h1 className='font-bold logofont text-2xl mb-2'>Clients Response</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mb-6"
      >
{
  reviews.map(review => <>        <SwiperSlide>
    <div className='max-w-[800px] gap-6 text-center flex items-center' >
      <div className=' w-1/2'>
          <div className='text-center flex flex-col items-center justify-center bg-[#ADEBD8]'>
          <img  className=' w-36 h-40 rounded-full pt-5' src={review.clientImage} alt="" />
          <h1 className='pb-5 mt-2  text-2xl font-bold'>{review.clientName}</h1>
          </div>
      </div>
      <div className='w-1/2'>
          <div>
          <p className='font-medium px-4 mt-6'>"{review.comment}"</p>
          <Rating name="size-medium" defaultValue={`${review.rating}`} />
          </div>
      </div>
    </div>
  </SwiperSlide>
  </>)
}
      </Swiper>
      </div>
    </>
    );
};

export default Reviews;