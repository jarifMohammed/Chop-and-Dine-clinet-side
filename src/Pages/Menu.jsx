
import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner';
import img from '../assets/menu/banner3.jpg'
import dessertImg from "../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../assets/menu/pizza-bg.jpg"
import soupImg from "../assets/menu/soup-bg.jpg"
import saladImg from "../assets/menu/salad-bg.jpg"
import useMenu from '../hooks/useMenu';
import SectionTitle from '../Components/SectionTitle';
import MenuCategory from '../Components/MenuCategory';

const Menu = () => {
    const [menu] =useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    const salad = menu.filter(item => item.category === 'salad')
    

    return (
        <div>
            <Helmet>
                <title>Our Menu</title>
            </Helmet>
            <Banner image={img} title='Our Menu'></Banner>
          <SectionTitle
          subHeading="Don't Miss"
          heading="Today's Offer"
          
          ></SectionTitle>
          <MenuCategory items={offered}></MenuCategory>

          <MenuCategory 
          items={dessert}
          title='desserts'
          img={dessertImg}
          ></MenuCategory>

<MenuCategory 
          items={pizza}
          title="pizzas"
          img={pizzaImg}
          ></MenuCategory>
<MenuCategory 
          items={soup}
          title="soups"
          img={soupImg}
          ></MenuCategory>

<MenuCategory 
          items={salad}
          title="salads"
          img={saladImg}
          ></MenuCategory>
          
          
        </div>
    );
};

export default Menu;