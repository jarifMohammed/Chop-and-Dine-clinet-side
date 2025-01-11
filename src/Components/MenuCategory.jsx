import { Link } from "react-router-dom";
import Banner from "./Banner";
import MenuFoods from "./MenuFoods";


const MenuCategory = ({items,title,img}) => {
    return (
        <div className="pt-8">
            {title && <Banner image={img} title={title}></Banner>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuFoods key={item._id} item ={item} ></MenuFoods>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;