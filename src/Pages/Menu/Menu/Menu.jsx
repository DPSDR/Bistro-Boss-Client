import HelmetTitle from "../../../components/HelmetTitle.jsx/HelmetTitle";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu.jsx";
import SectionTitle from "../../../components/SectionTitle/SectionTitle.jsx";
import MenuCatagory from "../MenuCatagory/MenuCatagory.jsx";

const Menu = () => {
    const menu = useMenu();
    const offered = menu[0].filter(item => item.category === "offered")
    const salad = menu[0].filter(item => item.category === "salad")
    const desserts = menu[0].filter(item => item.category === "dessert")
    const soup = menu[0].filter(item => item.category === "soup")
    const pizza = menu[0].filter(item => item.category === "pizza")
    const drinks = menu[0].filter(item => item.category === "drinks")

    return (
        <div>
            <HelmetTitle title={"Menu"}></HelmetTitle>

            {/* main cover */}
            <Cover img={menuImg} title="our menu"></Cover>

            {/* offered menu items */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCatagory items={offered}></MenuCatagory>

            {/* desert items */}
            <MenuCatagory items={desserts} title="dessert" img={dessertImg}></MenuCatagory>

            {/* pizza items */}
            <MenuCatagory items={pizza} title="pizza" img={pizzaImg}></MenuCatagory>

            {/* salad items */}
            <MenuCatagory items={salad} title="salad" img={saladImg}></MenuCatagory>

            {/* soup items */}
            <MenuCatagory items={soup} title="soup" img={soupImg}></MenuCatagory>

            {/* drinks items */}
            <MenuCatagory items={drinks} title="drinks" img={soupImg}></MenuCatagory>
        </div>
    );
};

export default Menu;