import { Parallax } from "react-parallax";

const Banner = ({image , title}) => {
    return (

      <Parallax
      blur={{ min: -100, max: 100 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
  >
       <div
        className="hero h-[500px]"
        >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
  </Parallax>



       
    );
};

export default Banner;