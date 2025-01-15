import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [reviews,setReviews] = useState([])

  useEffect(() => {

    fetch('http://localhost:5000/review')
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [])
    return (
        <div className="my-20">
            <SectionTitle
            subHeading="What our client say"
            heading={'Testimonials'}
            >

            </SectionTitle>
            <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
       {
        reviews.map(review => <SwiperSlide key={review._id} >

          <div className="mx-24 my-16 flex flex-col items-center">
          <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
            <p className="py-8">{review.details}</p>
            <h3 className="text-2xl text-orange-500">{review.name}</h3>
          </div>
        </SwiperSlide> )
       }
      </Swiper>
        </div>
    );
};

export default Testimonial;