
import { Carousel } from '@material-tailwind/react';

import img1 from '../assets/home/01.jpg'
import img2 from '../assets/home/02.jpg'
import img3 from '../assets/home/03.png'
import img4 from '../assets/home/04.jpg'
import img5 from '../assets/home/05.png'
const Slider = () => {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={img1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={img2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
      src={img3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
       <img
      src={img3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
       <img
      src={img4}
        alt="image 3"
        className="h-full w-full object-cover"
      />
       <img
      src={img5}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default Slider;
