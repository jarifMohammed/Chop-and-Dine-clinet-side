
import SectionTitle from "../Components/SectionTitle";

import MenuFoods from "../Components/MenuFoods";
import useMenu from "../hooks/useMenu";



const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')



    // const [menu , setMenu] =useState([])
    // useEffect(() => {
    //     fetch('/menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section className='mb-12'>
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"
            >
                
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuFoods key={item._id} item ={item} ></MenuFoods>)
                }
            </div>
            <button className="btn text-white bg-orange-600 btn-outline   mt-4">View Full menu</button>
        </section>
    );
};

export default PopularMenu;