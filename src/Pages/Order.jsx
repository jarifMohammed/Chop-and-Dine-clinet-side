import { useState } from 'react';
import img3 from '../assets/shop/banner2.jpg'
import Banner from '../Components/Banner';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import useMenu from '../hooks/useMenu';
import OrderTab from '../Components/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    <Helmet>
        <title>
           Order Food
        </title>
    </Helmet>
    const categories = ['desserts' ,   'pizzas', 'soups' , 'salads']
    const {category} = useParams()
    // console.log(category);
    const initialIndex = categories.indexOf(category)
    // console.log(initialIndex);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
   
    // console.log(category);
    
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    const salad = menu.filter(item => item.category === 'salad')
    return (
        <div className='text-center '>
            <Banner image={img3} title='Order Food'></Banner>
            <Tabs className='mt-5' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Dessert</Tab>
        
        <Tab>Pizza</Tab>
        <Tab>Soups</Tab>
        <Tab>Salad</Tab>
        
      </TabList>
      <TabPanel>
       <OrderTab items={dessert}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={soup}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={pizza}></OrderTab>
      </TabPanel>
     
      <TabPanel>
      <OrderTab items={salad}></OrderTab>
      </TabPanel>
    
    </Tabs>
            
        </div>
    );
};

export default Order;