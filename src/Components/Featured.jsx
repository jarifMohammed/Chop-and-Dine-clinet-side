import SectionTitle from "./SectionTitle";
import featuredImage from '../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-5 my-20">
            <SectionTitle
                subHeading="----------- Check it out ------------"
                heading="Featured Item"
            >
            </SectionTitle>
            <div className="md:flex items-center  justify-between py-20 px-20 mb-10">
                <img src={featuredImage} alt="Featured" className="md:w-1/2" />
                <div className="md:w-1/2 ml-4">
                    <p>Aug 20, 2025</p>
                    <p className="uppercase">Where I can get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias mollitia laborum vitae omnis natus maiores voluptatem iusto fugiat sapiente fuga commodi qui in nesciunt est tempore dignissimos labore earum.</p>
                    <button className="btn text-white btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
