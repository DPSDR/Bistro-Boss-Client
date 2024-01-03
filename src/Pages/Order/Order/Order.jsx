import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCover from "../../../assets/shop/order.jpg";
import HelmetTitle from "../../../components/HelmetTitle.jsx/HelmetTitle";
import Cover from "../../Shared/Cover/Cover";
import { useState } from 'react';
import useMenu from "../../../hooks/useMenu.jsx";
import FoodCard from '../../../components/FoodCard/FoodCard.jsx';
import OrderTab from '../OrderTab/OrderTab.jsx';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);


    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === "drinks")
    const salad = menu.filter(item => item.category === "salad")
    const desserts = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")

    return (
        <div>
            <HelmetTitle title={"Order"}></HelmetTitle>
            <Cover img={orderCover} title="Our Shop"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;