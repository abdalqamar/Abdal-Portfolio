import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const TestimonialSlider = ({ testimonials }) => {
  return (
    <div className="w-full max-w-8/12 mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">What People Are Saying?</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          1024: { slidesPerView: 3 }, // Show 3 testimonials on large screens
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
        // autoHeight={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 text-center 
              flex flex-col  justify-between items-center gap-3 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] ">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
