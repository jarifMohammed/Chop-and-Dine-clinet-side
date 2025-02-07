import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'
import SectionTitle from '../Components/SectionTitle';

const Category = () => {
    return (
        <section>
          <SectionTitle 
          subHeading={'From 11.00am to 10.00pm'}
          heading={'Order Online'}
          >
            
          </SectionTitle>
          <div className='mt-10 mb-10'>
             <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className='text-3xl text-white uppercase text-center -mt-16'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className='text-3xl text-white uppercase text-center -mt-16'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className='text-3xl text-white uppercase text-center -mt-16'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h3 className='text-3xl text-white uppercase text-center -mt-16'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h3 className='text-3xl text-white uppercase text-center -mt-16'>Salads</h3>
        </SwiperSlide>
       
      </Swiper>
        </div>
        </section>
    );
};

export default Category;