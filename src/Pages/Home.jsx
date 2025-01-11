
import { Helmet } from "react-helmet-async";
import Featured from "../Components/Featured";
import Slider from "../Components/Slider";
import Testimonial from "../Components/Testimonial";
import Category from "./Category";
import PopularMenu from "./PopularMenu";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                            <title>Home</title>
                        </Helmet>
           
           <Slider ></Slider>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonial></Testimonial>
           
           
        </div>
    );
};

export default Home;